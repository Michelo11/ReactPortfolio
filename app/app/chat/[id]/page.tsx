"use client";

import ChatBubble from "@/components/chat/bubble";
import ChatInput from "@/components/chat/input";
import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type OriginalMessage = Database["public"]["Tables"]["chat_messages"]["Row"];
export type Message = Omit<Omit<OriginalMessage, "created_at">, "reply"> & {
  created_at: Date;
  reply?: {
    id: number;
    content: string;
  };
};

export default function ChatPage() {
  const supabase = createClientComponentClient<Database>();
  const { id } = useParams();

  const [messages, setMessages] = useState<Message[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [reply, setReply] = useState<{
    id: number;
    content: string;
  } | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then((res) => {
      if (res.data.user) {
        setUserId(res.data.user.id);
      }
    });

    supabase
      .from("chats")
      .select("*, profiles (full_name, avatar_url), chat_messages (*)")
      .eq("id", Number(id))
      .single()
      .then((res) => {
        if (res.error || !res.data) {
          setError(true);
          return;
        }

        supabase
          .channel("table_db_changes")
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "chat_messages",
              filter: `chat=eq.${res.data.id}`,
            },
            (payload) => {
              switch (payload.eventType) {
                case "INSERT":
                  setMessages((messages: any) => {
                    if (payload.new.reply) {
                      const reply = messages.find(
                        (m: any) => m.id === payload.new.reply,
                      );

                      payload.new.reply = reply
                        ? {
                            id: reply.id,
                            content: reply.content,
                          }
                        : undefined;
                    }

                    return [...messages, payload.new];
                  });

                  break;
                case "UPDATE":
                  if (payload.new.reply) {
                    const reply = messages.find(
                      (m: any) => m.id === payload.new.reply,
                    );

                    payload.new.reply = reply
                      ? {
                          id: reply.id,
                          content: reply.content,
                        }
                      : undefined;
                  }

                  setMessages((messages: any) =>
                    messages.map((message: any) =>
                      message.id === payload.new.id ? payload.new : message,
                    ),
                  );

                  break;
                case "DELETE":
                  setMessages((messages: any) =>
                    messages.filter(
                      (message: any) => message.id !== payload.old.id,
                    ),
                  );
                  break;
              }
            },
          )
          .subscribe();

        const newMessages = res.data.chat_messages
          .sort(
            (a, b) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime(),
          )
          .map((message) => {
            if (message.reply) {
              const reply = res.data.chat_messages.find(
                (m: any) => m.id === message.reply,
              );

              return {
                ...message,
                created_at: new Date(message.created_at),
                reply: reply
                  ? {
                      id: reply.id,
                      content: reply.content,
                    }
                  : undefined,
              };
            }

            return {
              ...message,
              created_at: new Date(message.created_at),
              reply: undefined,
            };
          });

        setMessages(newMessages);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, supabase]);

  return (
    <div className="w-full flex flex-col h-full gap-2">
      {messages
        ?.sort((a, b) => {
          return a.created_at.getTime() - b.created_at.getTime();
        })
        .map((message: Message, index: number) => {
          const showDate =
            index === 0 ||
            message.created_at.getTime() -
              messages[index - 1].created_at.getTime() >
              5 * 60 * 1000;

          return (
            <ChatBubble
              key={message.id}
              id={message.id}
              message={message.content}
              attachments={message.attachments}
              date={showDate ? message.created_at : null}
              self={message.owner === userId}
              reply={message.reply}
              setReply={() => setReply(message)}
            />
          );
        })}

      <ChatInput
        chatId={Number(id)}
        userId={userId}
        reply={reply}
        resetReply={() => setReply(null)}
      />
    </div>
  );
}

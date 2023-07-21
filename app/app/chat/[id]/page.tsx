"use client";

import ChatBubble from "@/components/chat/bubble";
import ChatInput from "@/components/chat/input";
import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type OriginalMessage = Database["public"]["Tables"]["chat_messages"]["Row"];
export type Message = Omit<OriginalMessage, "created_at"> & {
  created_at: Date;
};

export default function ChatPage() {
  const supabase = createClientComponentClient<Database>();
  const { id } = useParams();

  const [messages, setMessages] = useState<Message[] | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    supabase.auth.getUser().then((res) => {
      if (res.data.user) {
        setUserId(res.data.user.id);
      }
    });

    supabase
      .from("chat")
      .select("*")
      .eq("id", Number(id))
      .then((res) => {
        if (res.error || !res.data || res.data.length === 0) {
          setError(true);
          console.log(res.error);
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
              filter: `chat=eq.${res.data[0].id}`,
            },
            (payload) => {
              switch (payload.eventType) {
                case "INSERT":
                  setMessages((messages: any) => [
                    ...messages,
                    {
                      ...payload.new,
                      created_at: new Date(payload.new.created_at),
                    },
                  ]);
                  break;
                case "UPDATE":
                  setMessages((messages: any) =>
                    messages.map((message: any) =>
                      message.id === payload.new.id
                        ? {
                            ...payload.new,
                            created_at: new Date(payload.new.created_at),
                          }
                        : message,
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

        supabase
          .from("chat_messages")
          .select("*")
          .eq("chat", Number(id))
          .then((res) => {
            if (res.error || !res.data) {
              setError(true);
              console.log(res.error);
              return;
            }

            setMessages(
              res.data.map((message: OriginalMessage) => ({
                ...message,
                created_at: new Date(message.created_at),
              })),
            );
          });
      });
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
              message={message.content}
              attachments={message.attachments}
              date={showDate ? message.created_at : null}
              self={message.owner === userId}
            />
          );
        })}

      <ChatInput chatId={Number(id)} userId={userId} />
    </div>
  );
}

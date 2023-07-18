"use client";

import ChatBubble from "@/components/chat/bubble";
import type { Database } from "@/types/supabase";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Message = {
  chat: number;
  content: string;
  created_at: string;
  id: number;
  owner: string;
};

export default function ChatPage() {
  const supabase = createClientComponentClient<Database>();
  const { id } = useParams();

  const [messages, setMessages] = useState<Message[] | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

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
        console.log(res);

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
                  setMessages((messages: any) => [...messages, payload.new]);
                  break;
                case "UPDATE":
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

            setMessages(res.data);
          });
      });
  }, [id, supabase]);

  const handleSubmit = () => {
    if (!input) return;

    supabase
      .from("chat_messages")
      .insert({
        chat: Number(id),
        content: input,
      })
      .then(() => {});

    setInput("");
  };

  return (
    <div className="w-full flex flex-col h-full gap-2">
      {messages?.map((message: any, index: number) => {
        const showDate =
          index === 0 ||
          new Date(message.created_at).getTime() -
            new Date(messages[index - 1].created_at).getTime() >
            5 * 60 * 1000;

        return (
          <ChatBubble
            key={message.id}
            message={message.content}
            date={showDate ? message.created_at : null}
            self={message.owner === userId}
          />
        );
      })}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="fixed bottom-20 left-0 w-screen px-10 md:px-24 flex items-center"
      >
        <input
          type="text"
          placeholder="Message"
          className="input bg-[#313a4e] appearance-none h-12 w-full p-2 rounded-r-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary w-12 h-12 rounded-l-none"
        >
          <FontAwesomeIcon icon={faPaperPlane} size="xl" />
        </button>
      </form>
    </div>
  );
}

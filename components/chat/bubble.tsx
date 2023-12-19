"use client";

import type { Database } from "@/types/supabase";
import { faReply, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Item, Menu, useContextMenu } from "react-contexify";
import "react-contexify/ReactContexify.css";

function dateString(date: Date) {
  const today = moment().endOf("day");
  const tomorrow = moment().add(1, "day").endOf("day");

  const dateMoment = moment(date);

  if (dateMoment.isSame(today, "day")) {
    return `Today at ${dateMoment.format("HH:mm")}`;
  }

  if (dateMoment.isSame(tomorrow, "day")) {
    return `Tomorrow at ${dateMoment.format("HH:mm")}`;
  }

  return dateMoment.format("DD/MM/YYYY [at] HH:mm");
}

export default function ChatBubble({
  id,
  message,
  attachments,
  self,
  date,
  reply,
  setReply,
}: {
  id: number;
  message: string;
  attachments: string[];
  self: boolean;
  date: Date | null;
  reply:
    | {
        id: number;
        content: string;
      }
    | undefined;
  setReply: () => void;
}) {
  const supabase = createClientComponentClient<Database>();
  const [attachmentUrls, setAttachmentUrls] = useState<string[]>([]);
  const { show } = useContextMenu({
    id: `chat-bubble-${id}`,
  });

  function handleContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    show({
      event,
      props: {
        key: "value",
      },
    });
  }

  useEffect(() => {
    if (attachments.length > 0) {
      const urls: string[] = [];
      for (const attachment of attachments) {
        urls.push(
          supabase.storage.from("uploads").getPublicUrl(attachment).data
            .publicUrl,
        );
      }

      setAttachmentUrls(urls);
    }
  }, [attachments, supabase]);

  return (
    <div className="w-full last-of-type:pb-3">
      {date && (
        <div
          className={
            "text-xs text-slate-500 " + (self ? "text-right" : "text-left")
          }
        >
          {dateString(date)}
        </div>
      )}

      <div
        onContextMenu={handleContextMenu}
        className={
          "w-fit max-w-md mt-2 " + (self ? "ml-auto chat-end" : "chat-start")
        }
      >
        <div
          className={
            "bg-[#1d283a] rounded-xl p-2 break-all " +
            (self ? "!bg-primary" : "bg-slate-700/30")
          }
        >
          <div className="flex flex-wrap gap-2">
            {attachmentUrls.map((url) => (
              <div
                key={url}
                className="relative w-32 h-32 rounded-xl overflow-hidden"
              >
                <Image
                  src={url}
                  layout="fill"
                  objectFit="cover"
                  alt="Attachment"
                />
              </div>
            ))}
          </div>

          {reply && (
            <div className="text-sm italic font-light">
              <FontAwesomeIcon icon={faReply} className="mr-2" />
              {reply.content}
            </div>
          )}
          {message}
        </div>
      </div>

      <Menu id={`chat-bubble-${id}`}>
        <Item id="reply" onClick={setReply}>
          <FontAwesomeIcon icon={faReply} className="mr-2" />
          Reply
        </Item>
        {self && (
          <Item
            id="delete"
            onClick={() => {
              supabase
                .from("chat_messages")
                .delete()
                .eq("id", id)
                .then(() => {});
            }}
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </Item>
        )}
      </Menu>
    </div>
  );
}

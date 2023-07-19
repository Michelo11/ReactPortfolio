"use client";

import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  message,
  attachments,
  self,
  date,
}: {
  message: string;
  attachments: string[];
  self: boolean;
  date: Date | null;
}) {
  const supabase = createClientComponentClient<Database>();
  const [attachmentUrls, setAttachmentUrls] = useState<string[]>([]);

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
    <div className="w-full last-of-type:pb-12">
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
        className={
          "w-fit max-w-md " + (self ? "ml-auto chat-end" : "chat-start")
        }
      >
        <div
          className={
            "bg-[#1d283a] rounded-xl p-2 " +
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

          {message}
        </div>
      </div>
    </div>
  );
}

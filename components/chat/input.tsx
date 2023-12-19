"use client";

import type { Database } from "@/types/supabase";
import {
  faFile,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRef, useState } from "react";

export default function ChatInput({
  chatId,
  userId,
  reply,
  resetReply,
}: {
  chatId: number;
  userId: string;
  reply: {
    id: number;
    content: string;
  } | null;
  resetReply: () => void;
}) {
  const supabase = createClientComponentClient<Database>();
  const [input, setInput] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSubmit = async () => {
    if (!input) return;
    let attachmentUrls: string[] = [];

    if (attachments.length > 0) {
      attachmentUrls = await Promise.all(
        attachments.map(async (file) => {
          const ext = file.name.split(".").pop() || "";
          const newName = `${Date.now()}.${ext}`;

          const { data, error } = await supabase.storage
            .from("uploads")
            .upload(`${userId}/${newName}`, file);

          if (error) {
            console.error(error);
            return "";
          }

          return data.path || "";
        }),
      );

      setAttachments([]);
      attachmentUrls = attachmentUrls.filter((url) => url !== "");
    }

    supabase
      .from("chat_messages")
      .insert({
        chat: chatId,
        content: input,
        attachments: attachmentUrls,
        reply: reply?.id || null,
      })
      .then(() => {});

    setInput("");
    resetReply();
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const files = Array.from(e.target.files);
    setAttachments(files);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="fixed w-absolute md:w-absolute-md bottom-0 py-6 bg-[#1c2230] bg-texture bg-repeat rounded-t-xl z-30 left-0"
    >
      {attachments.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-[#313a4e] appearance-none h-12 w-full p-2 rounded-xl rounded-b-none rounded-r-none">
            <p className="text-gray-400 mr-2">Attachments:</p>
            {attachments.map((file) => (
              <p key={file.name} className="text-gray-400 mr-2">
                {file.name}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setAttachments([])}
            className="btn btn-primary w-12 h-12 rounded-l-none rounded-b-none"
          >
            Clear
          </button>
        </div>
      )}
      {reply && (
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-[#313a4e] appearance-none h-12 w-full p-2 rounded-xl rounded-b-none rounded-r-none">
            <p className="text-gray-400 mr-2">Reply to:</p>
            {reply.content}
          </div>
          <button
            type="button"
            onClick={() => resetReply()}
            className="btn btn-primary w-12 h-12 rounded-l-none rounded-b-none"
          >
            <FontAwesomeIcon icon={faXmark} size={"xl"} />
          </button>
        </div>
      )}

      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Message"
          className={
            "input bg-[#313a4e] appearance-none h-12 w-full p-2 rounded-r-none " +
            (attachments.length > 0 || reply ? "rounded-t-none" : "")
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            fileRef.current?.click();
          }}
          className="absolute right-14 text-gray-400"
        >
          <FontAwesomeIcon icon={faFile} size="lg" />
        </button>
        <input
          ref={fileRef}
          onChange={handleUpload}
          hidden
          type="file"
          className="hidden"
          multiple
        />
        <button
          type="submit"
          className={
            "btn btn-primary w-12 h-12 rounded-l-none " +
            (attachments.length > 0 || reply ? "rounded-t-none" : "")
          }
        >
          <FontAwesomeIcon icon={faPaperPlane} size="xl" />
        </button>
      </div>
    </form>
  );
}

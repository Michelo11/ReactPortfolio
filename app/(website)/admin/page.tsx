"use client";

import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useRef, useState } from "react";

export default function ReviewPage() {
  const supabase = createClientComponentClient<Database>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  return (
    <Suspense>
      <div className="flex flex-col gap-4 w-full my-14">
        <div>
          <Image
            className="hidden md:block absolute left-1/4 -top-10 w-[800px] -z-10 select-none"
            src="/img/blue-blur.svg"
            alt="blur"
            width={100}
            height={100}
            placeholder="empty"
            draggable={false}
          />

          <h1 className="text-primary font-extrabold text-4xl uppercase text-center">
            Add a new project
          </h1>
          <h2 className="text-gray-400 text-center">
            Register your brand new project into your portfolio
          </h2>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            if (
              role != "web" &&
              role != "uix" &&
              role != "bot" &&
              role != "sysadmin" &&
              role != "plugin"
            ) {
              router.push("?error=" + "Invalid role");
              return;
            }

            if (images.length == 0) {
              router.push("?error=" + "You must upload at least one image");
              return;
            }

            const urls = [];
            console.log(images);
            for (const image of images) {
              const { data } = await supabase.storage
                .from("portfolio")
                .upload(`projects/${name}/${image.name.trim()}`, image);

              if (data?.path) urls.push(data.path);
            }

            console.log(urls);

            await supabase
              .from("projects")
              .insert({
                name,
                description,
                role,
                images: urls,
              })
              .then(() => {
                router.push("?success=" + "Project added");
                setName("");
                setRole("");
                setDescription("");
                setImages([]);
              });
          }}
          className="flex flex-col gap-4 md:w-1/3 pb-4 mx-auto"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="input bg-[#313a4e] appearance-none w-full text-base"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="role">Role</label>
            <input
              className="input bg-[#313a4e] appearance-none w-full text-base"
              type="text"
              name="role"
              id="role"
              placeholder="web, uix, bot, sysadmin, plugin"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="textarea bg-[#313a4e] appearance-none w-full text-base"
              name="description"
              id="description"
              placeholder="..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          <div className="flex gap-2 w-full">
            <button
              onClick={(e) => {
                e.preventDefault();
                fileRef.current?.click();
              }}
              className="custom-button-outline w-1/2"
              type="button"
            >
              Images ({images.length})
            </button>

            <button className="custom-button w-1/2" type="submit">
              Submit
            </button>

            <input
              onChange={() => {
                if (fileRef.current?.files) {
                  setImages(Array.from(fileRef.current.files));
                }
              }}
              accept="image/*"
              multiple
              type="file"
              hidden
              ref={fileRef}
            />
          </div>
        </form>
      </div>
    </Suspense>
  );
}

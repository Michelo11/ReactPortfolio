"use client";

import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ReviewPage() {
  const supabase = createClientComponentClient<Database>();

  const params = useSearchParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  if (!params.has("code")) {
    return (
      <div className="flex flex-col gap-4 w-full my-14">
        <div>
          <h1 className="text-primary font-extrabold text-4xl uppercase text-center">
            No data found for this review
          </h1>
          <h2 className="text-gray-400 text-center">Please try again later</h2>
        </div>
      </div>
    );
  }

  return (
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
          Leave a review
        </h1>
        <h2 className="text-gray-400 text-center">
          We would love to hear your feedback!
        </h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          supabase
            .from("reviews")
            .update({
              name,
              comment,
              rating,
              code: null,
            })
            .eq("code", params.get("code"))
            .then(() => {
              router.replace("/");
            });
        }}
        className="flex flex-col gap-4 md:w-1/3 pb-4 mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="input bg-[#313a4e] appearance-none w-full"
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
          <label htmlFor="comment">Comment</label>
          <textarea
            className="textarea textarea-bordered bg-[#313a4e] appearance-none w-full"
            name="comment"
            id="comment"
            placeholder="Your comment here"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rating">Rating</label>
          <div className="rating rating-lg">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={1}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={2}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={3}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={4}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={5}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
          </div>
        </div>

        <button className="custom-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

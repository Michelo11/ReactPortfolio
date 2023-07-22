"use client";

import type { Database } from "@/types/supabase";
import { Section } from "./section";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ReviewCard = function ReviewCard(
  props: Database["public"]["Tables"]["reviews"]["Row"],
) {
  return (
    <div className="custom-card xl:h-52 md:w-1/2 p-10 text-center flex-col justify-center items-center">
      <p className="text-gray-500 w-3/4">{props.comment}</p>
      <p className="mt-8 text-gray-400">- {props.name}</p>
    </div>
  );
};

export const Reviews = function Reviews() {
  const supabase = createClientComponentClient<Database>();
  const [reviews, setReviews] = useState<
    Database["public"]["Tables"]["reviews"]["Row"][]
  >([]);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("*")
      .then(({ data }) => {
        if (data) setReviews(data);
      });
  }, [supabase]);

  return (
    <Section code="reviews" name="My Reviews" id={4}>
      <div className="carousel w-3/4 mx-auto gap-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            id={`slide${index}`}
            className="carousel-item relative w-full items-center justify-center"
          >
            <ReviewCard {...review} />
            <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={"#slide" + (index === 0 ? reviews.length - 1 : index - 1)}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={"#slide" + (index === reviews.length - 1 ? 0 : index + 1)}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full gap-4 justify-center"></div>
    </Section>
  );
};

"use client";

import type { Database } from "@/types/supabase";
import { Section } from "./section";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "nuka-carousel";

const ReviewCard = function ReviewCard(
  props: Database["public"]["Tables"]["reviews"]["Row"],
) {
  return (
    <div className="custom-card xl:h-52 md:w-1/2 p-10 text-center flex-col justify-center items-center h-full m-auto">
      <div className="mb-2">
        <FontAwesomeIcon icon={faStar} className="text-2xl text-primary" />
        <FontAwesomeIcon icon={faStar} className="text-2xl text-primary" />
        <FontAwesomeIcon icon={faStar} className="text-2xl text-primary" />
        <FontAwesomeIcon icon={faStar} className="text-2xl text-primary" />
        <FontAwesomeIcon icon={faStar} className="text-2xl text-primary" />
      </div>

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
      <div  style={{
        maxWidth: "calc(100vw - 2rem)",
      }}>
        <Carousel
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "white",
              margin: "0 0.25rem",
            },
            prevButtonText: "<",
            nextButtonText: ">",
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={"review-"+index} {...review} />
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

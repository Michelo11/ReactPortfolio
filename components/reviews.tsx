"use client";

import { useFetcher } from "@/utils/fetcher";
import Review from "./review";

var $ = require("jquery");
if (typeof window !== "undefined") {
  (window as any).$ = (window as any).jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Reviews() {
  const { data: reviews } = useFetcher("/api/reviews");

  return (
    <div className="mt-20 flex flex-col items-center section" id="reviews">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Reviews</h1>
        <p className="text-gray-300 mx-4 text-center">
          Discover what my past clients have to say about me
        </p>
      </div>

      {reviews && reviews.map && (
        <OwlCarousel
          autoplay={true}
          autoplayTimeout={2000}
          nav={false}
          loop={true}
          dots={false}
          center={true}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1280: { items: 4 },
          }}
        >
          {reviews.map((review: any) => {
            return (
              <Review
                key={review.id}
                rating={review.rating}
                comment={review.comment}
                author={review.author}
              />
            );
          })}
        </OwlCarousel>
      )}
    </div>
  );
}

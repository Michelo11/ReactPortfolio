import { Section } from "./section";

type Review = {
  id: string;
  name: string;
  comment: string;
  rating: number;
};

const ReviewCard = function ReviewCard(props: Review) {
  return (
    <div className="custom-card xl:h-52 md:w-3/5 2xl:w-2/5 p-10 text-center flex-col justify-center items-center">
      <p className="text-gray-500 w-3/4">{props.comment}</p>
      <p className="mt-8 text-gray-400">- {props.name}</p>
    </div>
  );
};

export const Reviews = function Reviews() {
  return (
    <Section code="reviews" name="My Reviews" id={4}>
      <div className="flex w-full gap-4 justify-center">
        <ReviewCard
          id="1"
          name="Michele"
          comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error provident quia voluptates nobis magnam corporis suscipit dolor architecto reprehenderit ullam. "
          rating={5}
        />
      </div>
    </Section>
  );
};

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Review({
  author,
  comment,
  rating,
}: {
  author: string;
  comment: string;
  rating: number;
}) {
  return (
    <div className="bg-[#0f0b08]/75 w-72 p-5 h-48 rounded space-y-2 mt-12 mx-auto">
      <div className="gap-1 flex">
        {Array.from({ length: rating }, (_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-[#235bdd] text-xl"
          />
        ))}
      </div>
      <p className="grey-text">{comment}</p>
      <p>{author}</p>
    </div>
  );
}

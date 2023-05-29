import { useFetcher } from "@/utils/fetcher";

export default function Reviews() {
  const { data: reviews } = useFetcher("/api/reviews");

  return <div>{JSON.stringify(reviews)}</div>;
}

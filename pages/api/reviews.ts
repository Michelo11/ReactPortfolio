import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = fetch("https://projectsapi.p.rapidapi.com/reviews", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc32daa0d5msh47ac0511d372ae3p121629jsnaae1bbd605b2",
      "X-RapidAPI-Host": "projectsapi.p.rapidapi.com",
    },
  }).then(res => res.json());

  res.status(200).json(data);
}

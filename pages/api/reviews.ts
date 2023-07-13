import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await fetch(`https://projectsapi.p.rapidapi.com/reviews`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_KEY as string,
        "X-RapidAPI-Host": "projectsapi.p.rapidapi.com",
      },
    }).then((res) => res.json());

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error has occurred" });
  }
}

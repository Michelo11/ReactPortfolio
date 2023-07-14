export async function GET(request: Request) {
  try {
    const data = await fetch(`https://projectsapi.p.rapidapi.com/reviews`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_KEY as string,
        "X-RapidAPI-Host": "projectsapi.p.rapidapi.com",
      },
    }).then((res) => res.json());

    return data;
  } catch (error) {
    return new Response(JSON.stringify({ error: "An error has occurred" }), {
      status: 500,
      headers: {
        ContentType: "application/json",
      },
    });
  }
}

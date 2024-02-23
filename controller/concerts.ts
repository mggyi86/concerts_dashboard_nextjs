"use server";

export const getConcerts = async () => {
  const apiURI = new URL(
    `${process.env.API_HOST}/concerts`
  );

  let response = await fetch(apiURI, {
    headers: {
      accept: "application/json",
    },
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
};
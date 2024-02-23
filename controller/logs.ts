"use server";

export const getAllLogs = async (adminToken: string) => {
  const apiURI = new URL(
    `${process.env.API_HOST}/reservations/all-logs`
  );

  let response = await fetch(apiURI, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${adminToken}`
    },
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);

};
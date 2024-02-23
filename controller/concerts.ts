"use server";

export const createConcert = async (data : any, adminToken: string) => {
  const apiURI = new URL(
    `${process.env.API_HOST}/concerts`
  );

  let response = await fetch(apiURI, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${adminToken}`
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);

};

export const deleteConcert = async (concertId : string, adminToken: string) => {
  const apiURI = new URL(
    `${process.env.API_HOST}/concerts/${concertId}`
  );

  let response = await fetch(apiURI, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${adminToken}`
    },
    method: "DELETE",
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);

};

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

export const reserveConcert = async (concertId : string, userToken: string) => {
  const apiURI = new URL(
    `${process.env.API_HOST}/reservations/reserve/${concertId}`
  );

  let response = await fetch(apiURI, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${userToken}`
    },
    method: "POST",
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);

};

export const cancelConcert = async (concertId : string, userToken: string) => {
  const apiURI = new URL(
    `${process.env.API_HOST}/reservations/cancel/${concertId}`
  );

  let response = await fetch(apiURI, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${userToken}`
    },
    method: "POST",
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);

};
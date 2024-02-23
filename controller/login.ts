"use server";
export const loginUser = async () => {
  const user = {
    "email": "user1@user1.com",
    "password": "password"
  }
  const apiURI = new URL(`${process.env.API_HOST}/auth/login`);

  let response = await fetch(apiURI, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(user),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
};

export const loginAdmin = async () => {
  const admin = {
    "email": "admin@admin.com",
    "password": "password"
  }
  const apiURI = new URL(`${process.env.API_HOST}/admin-auth/login`);

  let response = await fetch(apiURI, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(admin),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
};

export const loginUser = async (payload: any, endpoint: any) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // if (!response.ok) {
  //   throw new Error("Login failed");
  // }

  return await response.json();
};

const token = sessionStorage.getItem("authToken");

export const commonFetchFunction = async (
  endpoint: any,
  params: string = ""
) => {
  const response = await fetch(endpoint + params, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

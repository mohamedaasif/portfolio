export const fetchWrapper = async (url: any, options: any = {}) => {
  const token = sessionStorage.getItem("authToken");
  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  };
  const response = await fetch(url, config);

  // if (response.status === 401 || response.status === 403) {
  //   window.location.href = "/session-expired";
  //   return;
  // }

  const data = await response.json();
  return data;
};

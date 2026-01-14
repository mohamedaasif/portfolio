export const fetchWrapper = async (url: any, options: any = {}) => {
  const token = sessionStorage.getItem("authToken");
  const isFormData = options.body instanceof FormData;
  const config = {
    ...options,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  };
  const response = await fetch(url, config);

  if (response.status === 401 || response.status === 403) {
    window.location.replace("/session-expired");
    return;
  }

  const data = await response.json();
  return data;
};

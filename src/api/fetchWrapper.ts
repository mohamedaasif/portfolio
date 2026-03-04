export const fetchWrapper = async (url: any, options: any = {}) => {
  try {
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

    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + url,
      config,
    );

    if (response.status === 401 || response.status === 403) {
      window.location.replace("/session-expired");
      return;
    }

    const data = await response.json();
    return data;
  } catch (err: any) {
    console.log("ERROR:", err.message);
  }
};

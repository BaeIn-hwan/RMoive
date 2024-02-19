import axios from "axios";
import qs from "qs";

const apiRequest = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 50000,
  paramsSerializer: function (params) {
    return qs.stringify({
      api_key: `${import.meta.env.VITE_API_KEY}`,
      ...params,
    });
  },
});

apiRequest.interceptors.request.use((config) => config);

apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default apiRequest;

import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const axiosInstance = axios.create({ baseURL });
axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "something went wrong"
    )
);

export default axiosInstance;

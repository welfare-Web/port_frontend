import axios from "axios";

const api = axios.create({
  baseURL: "https://port-backend-5np3.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-assignment15-7.onrender.com/api",
});

export default API;

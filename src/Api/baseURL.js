import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://faried-e-commerce.onrender.com",
});

export default baseUrl;

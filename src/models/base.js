import { API_KEY } from "@env";

const axios = require("axios");
const API_URL = "https://api.github.com";
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${API_KEY}`,
  },
});

export default instance;

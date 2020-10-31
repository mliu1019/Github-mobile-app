// import { API_KEY } from "@env";

const axios = require("axios");
const API_URL = "https://api.github.com";
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer a6f3f8e3d403b3850a59b13d5dad3ea7826a1b6a`,
  },
});

// export default instance;
exports.instance = instance;

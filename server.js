const axios = require("axios");
const API_KEY = "a6f3f8e3d403b3850a59b13d5dad3ea7826a1b6a";
const API_URL = "https://api.github.com";
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${API_KEY}`,
  },
});
const repo_model = {
  get: (login) => {
    const query = `
      query { 
        user(login:"${login}") {
          repositories (privacy: PUBLIC, first:10) {
            nodes {
              name
              owner {
                login
              }
              description
            }
          }
        }
      }
    `;
    return instance.post("/graphql", JSON.stringify({ query }));
  },
};

repo_model.get("fabpot").then((res) => console.log(res.data));

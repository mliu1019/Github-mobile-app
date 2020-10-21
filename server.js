const axios = require("axios");
const API_KEY = "a6f3f8e3d403b3850a59b13d5dad3ea7826a1b6a";
const API_URL = "https://api.github.com/graphql";
const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: "bearer a6f3f8e3d403b3850a59b13d5dad3ea7826a1b6a",
  },
});

const fetch_repositories = (login) => {
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
  return instance.post(API_URL, JSON.stringify({ query }));
};

const fetch_profile = (login) => {
  const query = `
    query { 
      user(login:"${login}") { 
        avatarUrl (size:200)
        name
        login
        bio
        url
        email
        repositories (privacy: PUBLIC, first:100) {
          totalCount
          nodes {
            name
            owner {
              login
            }
            description
          }
        }
        followers {
          totalCount
        }
        following {
          totalCount
        }
        createdAt
      }
    }
  `;
  return instance.post(API_URL, JSON.stringify({ query }));
};

const fetch_followers = (login) => {
  const query = `
    query { 
      user(login:"${login}") {
        followers (first:10) {
          nodes {
            avatarUrl (size:200)
            login
            bio
          }
        }
      }
    }
  `;
  return instance.post(API_URL, JSON.stringify({ query }));
};

const fetch_following = (login) => {
  const query = `
    query { 
      user(login:"${login}") {
        following (first:10) {
          nodes {
            avatarUrl (size:200)
            login
            bio
          }
        }
      }
    }
  `;
  return instance.post(API_URL, JSON.stringify({ query }));
};

fetch_profile("MirandaLiu1019").then((resp) => console.log(resp.data.data));

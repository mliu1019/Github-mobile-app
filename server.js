const fetch = require("node-fetch");

const query = `
  query { 
    user(login:"fabpot") { 
      avatarUrl (size:200)
      name
      login
      bio
      websiteUrl
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

const url = "https://api.github.com/graphql";
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json",
    "Authorization": "bearer a6f3f8e3d403b3850a59b13d5dad3ea7826a1b6a"
  },
  body: JSON.stringify({ query })
};

fetch(url, opts)
  .then(res => res.json())
  .then(js => console.log(js.data))
  .catch(console.error);
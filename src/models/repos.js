const base = require("./base");
const instance = base.instance;

const get = (login) => {
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
};

exports.get = get;

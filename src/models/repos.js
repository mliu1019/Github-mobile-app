import instance from "./base";

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

export { repo_model };

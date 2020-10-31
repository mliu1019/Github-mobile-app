const base = require("./base");
const instance = base.instance;

const get = (login) => {
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
  return instance.post("/graphql", JSON.stringify({ query }));
};

// export { profile_model };
exports.get = get;

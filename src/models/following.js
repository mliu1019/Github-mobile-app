const base = require("./base");
const instance = base.instance;

const get = (login) => {
  const query = `
        query { 
        user(login:"${login}") {
            following (first:10) {
            nodes {
                avatarUrl (size:200)
                login
                bio
                name
            }
            }
        }
        }
    `;
  return instance.post("/graphql", JSON.stringify({ query }));
};

// export { following_model };
exports.get = get;

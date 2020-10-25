import instance from "./base";

const following_model = {
  get: (login) => {
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
    return instance.post("/graphql", JSON.stringify({ query }));
  },
};

export { following_model };

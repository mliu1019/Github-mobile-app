import instance from "./base";

const follower_model = {
  get: (login) => {
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
    return instance.post("/graphql", JSON.stringify({ query }));
  },
};

export { follower_model };

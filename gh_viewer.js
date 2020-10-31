const profile_model = require("./src/models/profile");
const follower_model = require("./src/models/follower");
const following_model = require("./src/models/following");
const repo_model = require("./src/models/repos");

const [, , ...args] = process.argv;

const page_fn = {
  profile: (login) =>
    profile_model.get(login).then(
      (resp) => log_profile(resp.data.data.user),
      (err) => console.log(err.response.status + " " + err.response.statusText)
    ),
  repositories: (login) =>
    repo_model.get(login).then(
      (resp) => log_repo(resp.data.data.user.repositories.nodes),
      (err) => console.log(err.response.status + " " + err.response.statusText)
    ),
  followers: (login) =>
    follower_model.get(login).then(
      (resp) => log_user(resp.data.data.user.followers.nodes),
      (err) => console.log(err.response.status + " " + err.response.statusText)
    ),
  following: (login) =>
    following_model.get(login).then(
      (resp) => log_user(resp.data.data.user.following.nodes),
      (err) => console.log(err.response.status + " " + err.response.statusText)
    ),
};

const log_profile = (profile) => {
  const login = profile.login;
  const name = profile.name || "";
  const email = profile.email;
  const repos = profile.repositories.totalCount;
  console.log(`
    login: ${login}
    name: ${name}
    email: ${email}
    repositories: ${repos}
  `);
};

const log_repo = (repo) => {
  repo.forEach((r) => {
    const login = r.owner.login;
    const name = r.name;
    const description = r.description;
    console.log(`
        owner: ${login}
        name: ${name}
        description: ${description}
    `);
  });
};

const log_user = (user) => {
  user.forEach((u) => {
    const login = u.login;
    const name = u.name || "";
    console.log(`
        login: ${login}
        name: ${name}
    `);
  });
};

const page = args[0];
if (!(page in page_fn)) {
  console.log(`
    page ${page} does not exist.
  `);
} else {
  const login = args[1] === undefined ? "octocat" : args[1];
  page_fn[page](login);
}

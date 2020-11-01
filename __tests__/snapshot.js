import React from "react";
import renderer, { act } from "react-test-renderer";

import Home from "../src/views/home";
import Profile from "../src/views/profile";
import Repos from "../src/views/repo";
import Follow from "../src/views/follow";
import Header from "../src/views/shared/header";

const fakeLogin = "MirandaLiu1019";
const fakeProfile = {
  avatarUrl: "https://avatars3.githubusercontent.com/u/32145505?s=200&v=4",
  name: "Miranda Liu",
  login: "MirandaLiu1019",
  bio: "",
  url: "https://github.com/MirandaLiu1019",
  email: "",
  repositories: { totalCount: 13, nodes: [Array] },
  followers: { totalCount: 0 },
  following: { totalCount: 0 },
  createdAt: "2017-09-20T20:49:44Z",
};
const fakeRepos = [
  {
    name: "Lab3",
    owner: { login: "MirandaLiu1019" },
    description: "Project skeleton for Lab 3.",
  },
  {
    name: "Lab4",
    owner: { login: "MirandaLiu1019" },
    description: "Lab 4 starter code.",
  },
  {
    name: "Lab5",
    owner: { login: "MirandaLiu1019" },
    description: "Lab5 starter code.",
  },
  {
    name: "Lab7",
    owner: { login: "MirandaLiu1019" },
    description: "Lab7 starter code.",
  },
  {
    name: "fa17-hw4-template",
    owner: { login: "MirandaLiu1019" },
    description: "Template files for FA17 Homework 4 (dictionaries)",
  },
  {
    name: "Lab8",
    owner: { login: "MirandaLiu1019" },
    description: "Lab8 starter code.",
  },
  {
    name: "Lab9",
    owner: { login: "MirandaLiu1019" },
    description: "Lab9 starter code.",
  },
  {
    name: "Lab10",
    owner: { login: "MirandaLiu1019" },
    description: "Lab10 starter code.",
  },
  {
    name: "Lab11",
    owner: { login: "MirandaLiu1019" },
    description: "Lab11 starter code.",
  },
  {
    name: "sockets-lecture",
    owner: { login: "MirandaLiu1019" },
    description: "Lecture 13, Fall 2017",
  },
];
const fakeFollowers = [
  {
    avatarUrl: "https://avatars1.githubusercontent.com/u/72242664?s=200&v=4",
    login: "tatthien",
    bio: "Web Developer",
  },
  {
    avatarUrl:
      "https://avatars0.githubusercontent.com/u/11194525?s=200&u=c9b6aa575dcf44da04408bcc5a0328432f4a94a2&v=4",
    login: "maulayyacyber",
    bio: "\r\n    Creator @SantriKoding-com  \r\n",
  },
  {
    avatarUrl: "https://avatars2.githubusercontent.com/u/67175385?s=200&v=4",
    login: "raviyaswanth",
    bio: null,
  },
  {
    avatarUrl:
      "https://avatars1.githubusercontent.com/u/60230552?s=200&u=6894fcad285d22dd1c2de00f11fd05da6e865f06&v=4",
    login: "JoaoFelixx",
    bio:
      "Sou desenvolvedor Full-Stack, apaixonado por tecnologia da informação. Sempre aprendendo coisas novas com objetivo de ser um bom profissional. ",
  },
  {
    avatarUrl:
      "https://avatars0.githubusercontent.com/u/9191921?s=200&u=3739ffa74927c8564dfe838c6cf48c9b957b6daf&v=4",
    login: "gdkv",
    bio: "",
  },
  {
    avatarUrl:
      "https://avatars3.githubusercontent.com/u/69043539?s=200&u=88f1080270c209e0ce9bc505ddb927143891cdc0&v=4",
    login: "LaithDribaty",
    bio: null,
  },
  {
    avatarUrl:
      "https://avatars0.githubusercontent.com/u/18176078?s=200&u=f9c3a2338d3df322ba1f9e7a082eafe2677c2e56&v=4",
    login: "Claessens14",
    bio:
      "Engineering Systems and Computing student at the University  of  Guelph.",
  },
  {
    avatarUrl:
      "https://avatars1.githubusercontent.com/u/55347822?s=200&u=6393f0ba5dfd8deba886812e07f6d992f6c4c329&v=4",
    login: "asadkhanek",
    bio:
      "\r\n" +
      "    \r\n" +
      "muhammad asad khan is a Senior year bachelor’s student of Software Engineering virtual university of pakistan \r\n" +
      "\r\n",
  },
  {
    avatarUrl:
      "https://avatars3.githubusercontent.com/u/12392986?s=200&u=a63d0d1c674d0ae4a4480726dcd2a087d0b63cf6&v=4",
    login: "xhepa112",
    bio: "",
  },
  {
    avatarUrl:
      "https://avatars0.githubusercontent.com/u/18063007?s=200&u=c228b1c1ed19339ebce377956cd2b1c32cf3c857&v=4",
    login: "qingpizi",
    bio: "",
  },
];
const fakeFollowing = [];

const promise_fn = () => {
  return new Promise(() => {});
};

const follower_model = require("../src/models/follower");
follower_model.get = promise_fn;
const mock_follower = jest.spyOn(follower_model, "get").mockResolvedValueOnce({
  data: { data: { user: { followers: { nodes: fakeFollowers } } } },
});

const following_model = require("../src/models/following");
const mock_following = jest
  .spyOn(following_model, "get")
  .mockResolvedValueOnce({
    data: { data: { user: { following: { nodes: fakeFollowing } } } },
  });
``;
const profile_model = require("../src/models/profile");
profile_model.get = promise_fn;
const mock_profile = jest.spyOn(profile_model, "get").mockResolvedValueOnce({
  data: { data: { user: fakeProfile } },
});

const repos_model = require("../src/models/repos");
repos_model.get = promise_fn;
const mock_repo = jest.spyOn(repos_model, "get").mockResolvedValueOnce({
  data: { data: { user: { repositories: { nodes: fakeRepos } } } },
});

const navigation = {
  navigate: jest.fn(),
};

test("renders HOME correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Header correctly", () => {
  const tree = renderer.create(<Header login={fakeLogin} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Profile correctly", async () => {
  let component;
  await act(async () => {
    component = renderer.create(
      <Profile
        route={{
          params: {
            login: fakeLogin,
          },
        }}
        navigation={navigation}
      />
    );
  });
  expect(mock_profile).toBeCalledWith(fakeLogin);
  expect(component.toJSON()).toMatchSnapshot();
  mock_profile.mockRestore();
});

test("renders Repos correctly", async () => {
  let component;
  await act(async () => {
    component = renderer.create(
      <Repos
        route={{
          params: {
            login: fakeLogin,
          },
        }}
        navigation={navigation}
      />
    );
  });
  expect(mock_repo).toBeCalledWith(fakeLogin);
  expect(component.toJSON()).toMatchSnapshot();
  mock_repo.mockRestore();
});

test("Test Follower Page with Mocking", async () => {
  let component;
  await act(async () => {
    component = renderer.create(
      <Follow
        route={{
          params: {
            login: fakeLogin,
            type: "follower",
          },
        }}
        navigation={navigation}
      />
    );
  });
  expect(mock_follower).toBeCalledWith(fakeLogin);
  expect(component.toJSON()).toMatchSnapshot();
  mock_follower.mockRestore();
});

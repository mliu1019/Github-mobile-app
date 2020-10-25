import React from "react";
import renderer from "react-test-renderer";

import Home from "../src/views/home";
import Profile from "../src/views/profile";
import Repos from "../src/views/repo";
import Follow from "../src/views/follow";
import Header from "../src/views/shared/header";

test("renders HOME correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Header correctly", () => {
  const tree = renderer.create(<Header login={fakeLogin} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Profile correctly", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const tree = renderer
    .create(
      <Profile
        route={{
          params: {
            login: fakeLogin,
            profile: fakeProfile,
          },
        }}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Repos correctly", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const tree = renderer
    .create(
      <Repos
        route={{
          params: {
            login: fakeLogin,
            repos: fakeRepos,
          },
        }}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Followers correctly", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const tree = renderer
    .create(
      <Follow
        route={{
          params: {
            login: fakeLogin,
            users: fakeFollowers,
          },
        }}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Following correctly", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const tree = renderer
    .create(
      <Follow
        route={{
          params: {
            login: fakeLogin,
            users: fakeFollowing,
          },
        }}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

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

import React from "react";
import renderer from "react-test-renderer";

import Home from "../src/components/home";
import Profile from "../src/components/profile";
import Header from "../src/components/shared/header";

import {
  fetch_repositories,
  fetch_profile,
  fetch_followers,
  fetch_following,
} from "../src/utils/query";

test("renders HOME correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Header correctly", () => {
  const tree = renderer.create(<Header login="Miranda" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Profile correctly", () => {
  const navigation = {
    navigate: jest.fn(),
  };
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

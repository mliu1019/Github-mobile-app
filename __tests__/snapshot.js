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
            type: "follower",
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
            type: "following",
          },
        }}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const fakeLogin = "MirandaLiu1019";

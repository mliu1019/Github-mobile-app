/**
 * @jest-environment jsdom
 */

import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";

import { expect as chaiexpect } from "chai";

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import Home from "../src/views/home";
import Follow from "../src/views/follow";
import renderer, { act } from "react-test-renderer";
import Profile from "../src/views/profile";

const fakeLogin = "MirandaLiu1019";
const fakeUsers = [
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
];

const promise_fn = () => {
  return new Promise(() => {});
};

const follower_model = require("../src/models/follower");
follower_model.get = promise_fn;
const mock_follower = jest.spyOn(follower_model, "get").mockResolvedValueOnce({
  data: { data: { user: { followers: { nodes: fakeUsers } } } },
});

describe("Test Home Page Functionality", () => {
  it("Test Navigation", () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const home = shallow(
      <Home
        route={{
          params: {
            login: fakeLogin,
          },
        }}
        navigation={navigation}
      />
    );
    chaiexpect(home.find("Link")).to.have.lengthOf(4);
    home.find("Link").first().props().onPress();
    chaiexpect(navigation.navigate.mock.calls.length).equal(1);

    home.find("Link").at(2).props().onPress();
    chaiexpect(navigation.navigate.mock.calls.length).equal(2);
  });
});

describe("Test Follower Page", () => {
  it("Test Renders Correctly", async () => {
    const navigation = {
      navigate: jest.fn(),
    };

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
  });
});

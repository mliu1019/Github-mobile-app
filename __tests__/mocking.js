import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

import { expect } from "chai";
import { shallow } from "enzyme";
import Home from "../src/views/home";

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
    expect(home.find("Link")).to.have.lengthOf(4);
    home.find("Link").first().props().onPress();
    expect(navigation.navigate.mock.calls.length).equal(1);

    home.find("Link").at(2).props().onPress();
    expect(navigation.navigate.mock.calls.length).equal(2);
  });
});

const fakeLogin = "MirandaLiu1019";

import React from "react";
import styled from "styled-components/native";

const profile_model = require("../models/profile");
const follower_model = require("../models/follower");
const following_model = require("../models/following");
const repo_model = require("../models/repos");

const Root = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-top: 35%;
`;

const Link = styled.Text`
  margin: 10px;
  font-size: 32;
  color: blue;
`;

const Home = ({ navigation }) => {
  return (
    <Root>
      <Link
        onPress={() =>
          profile_model.get("fabpot").then(
            (resp) => {
              navigation.navigate("Profile", {
                profile: resp.data.data.user,
                login: "fabpot",
              });
            },
            (err) => {}
          )
        }
      >
        Profile
      </Link>
      <Link
        onPress={() =>
          repo_model.get("fabpot").then(
            (resp) => {
              navigation.navigate("Repos", {
                login: "fabpot",
                repos: resp.data.data.user.repositories.nodes,
              });
            },
            (err) => {}
          )
        }
      >
        Repos
      </Link>
      <Link
        onPress={() =>
          follower_model.get("fabpot").then(
            (resp) => {
              navigation.navigate("Follower", {
                login: "fabpot",
                users: resp.data.data.user.followers.nodes,
              });
            },
            (err) => {}
          )
        }
      >
        Followers
      </Link>
      <Link
        onPress={() =>
          following_model.get("fabpot").then(
            (resp) => {
              navigation.navigate("Following", {
                login: "fabpot",
                users: resp.data.data.user.following.nodes,
              });
            },
            (err) => {}
          )
        }
      >
        Following
      </Link>
    </Root>
  );
};

export default Home;

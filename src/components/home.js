import React from "react";
import styled from "styled-components";
import {
  fetch_repositories,
  fetch_profile,
  fetch_followers,
  fetch_following,
} from "../utils/query";

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
          fetch_profile("fabpot").then((resp) => {
            navigation.navigate("Profile", {
              profile: resp.data.data.user,
              login: "fabpot",
            });
          })
        }
      >
        Profile
      </Link>
      <Link
        onPress={() =>
          fetch_repositories("fabpot").then((resp) => {
            navigation.navigate("Repos", {
              login: "fabpot",
              repos: resp.data.data.user.repositories.nodes,
            });
          })
        }
      >
        Repos
      </Link>
      <Link
        onPress={() =>
          fetch_followers("fabpot").then((resp) => {
            navigation.navigate("Follower", {
              login: "fabpot",
              users: resp.data.data.user.followers.nodes,
            });
          })
        }
      >
        Followers
      </Link>
      <Link
        onPress={() =>
          fetch_following("fabpot").then((resp) => {
            navigation.navigate("Following", {
              login: "fabpot",
              users: resp.data.data.user.following.nodes,
            });
          })
        }
      >
        Following
      </Link>
    </Root>
  );
};

export default Home;

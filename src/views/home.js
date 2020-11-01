import React from "react";
import styled from "styled-components/native";

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
Link.displayName = "Link";

const Home = ({ navigation }) => {
  return (
    <Root>
      <Link onPress={() => navigation.navigate("Profile", { login: "fabpot" })}>
        Profile
      </Link>
      <Link
        onPress={() =>
          navigation.navigate("Repos", {
            login: "fabpot",
          })
        }
      >
        Repos
      </Link>
      <Link
        onPress={() =>
          navigation.navigate("Follower", {
            login: "fabpot",
            type: "follower",
          })
        }
      >
        Followers
      </Link>
      <Link
        onPress={() =>
          navigation.navigate("Following", {
            login: "fabpot",
            type: "following",
          })
        }
      >
        Following
      </Link>
    </Root>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { TouchableHighlight, ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from "./shared/header";

const follower_model = require("../models/follower");
const following_model = require("../models/following");

const Root = styled.View`
  /* background-color: papayawhip; */
`;

const Avatar = styled.Image`
  height: 64;
  width: 64;
`;

const UserRoot = styled.View`
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
`;
UserRoot.displayName = "UserRoot";

const User = styled.View`
  padding: 16px;
  height: 150;
  flex-direction: row;
  border-width: 1;
`;

const Info = styled.View`
  flex-direction: column;
  margin-left: 32px;
  margin-right: 64px;
`;

const Login = styled.Text`
  font-size: 24;
  font-weight: bold;
`;
Login.displayName = "Login";

const Bio = styled.Text`
  margin-top: 10;
  color: gray;
`;

const Follow = ({ route, navigation }) => {
  const { login, type } = route.params;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (type === "following") {
      following_model.get(login).then((resp) => {
        setUsers(resp.data.data.user.following.nodes);
      });
    } else if (type === "follower") {
      follower_model.get(login).then((resp) => {
        setUsers(resp.data.data.user.followers.nodes);
      });
    }
  });

  const userItem = (user) => {
    return (
      <UserRoot>
        <User>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("Profile", {
                login: user.login,
              })
            }
          >
            <Avatar
              source={{
                uri: user.avatarUrl,
              }}
            />
          </TouchableHighlight>

          <Info>
            <Login
              onPress={() =>
                navigation.navigate("Profile", {
                  login: user.login,
                })
              }
            >
              {user.login}
            </Login>
            <Bio>{user.bio}</Bio>
          </Info>
        </User>
      </UserRoot>
    );
  };

  return (
    <Root>
      <Header login={login} />
      <ScrollView>{users.map((data) => userItem(data))}</ScrollView>
    </Root>
  );
};

export default Follow;

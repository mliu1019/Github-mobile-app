import React from "react";
import { TouchableHighlight, ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from "./shared/header";
import { fetch_profile } from "../utils/query";

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

const Bio = styled.Text`
  margin-top: 10;
  color: gray;
`;

const Follow = ({ route, navigation }) => {
  const { login, users } = route.params;
  const userItem = (user) => {
    return (
      <UserRoot>
        <User>
          <TouchableHighlight
            onPress={() =>
              fetch_profile(user.login).then((resp) => {
                navigation.navigate("Profile", {
                  profile: resp.data.data.user,
                });
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
                fetch_profile(user.login).then((resp) => {
                  navigation.navigate("Profile", {
                    login: user.login,
                    profile: resp.data.data.user,
                  });
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

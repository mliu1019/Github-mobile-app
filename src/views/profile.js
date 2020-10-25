import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

import { repo_model } from "../models/repos";
import { follower_model } from "../models/follower";
import { following_model } from "../models/following";

const Root = styled.View`
  /*background-color: papayawhip;*/
`;

const Name = styled.Text`
  font-size: 20;
`;

const INFO = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

const VAL = styled.Text`
  position: absolute;
  left: 128;
`;

const LINE = styled.View`
  flex-direction: row;
  margin-bottom: 10;
`;

// const Head = styled.View`
//   flexDirection: "row";
//   height: 100;
// `;

const Profile = ({ route, navigation }) => {
  const { login, profile } = route.params;
  return (
    <Root>
      {/* <View style={styles.head}>
        <View style={styles.headTitle}>
          <Text style={styles.titleText}>Profile</Text>
        </View>
      </View> */}
      <View style={styles.content}>
        <View style={[styles.mg40, styles.name]}>
          <View style={{ flex: 0.48 }}>
            <Image
              style={styles.avatar}
              source={{
                uri: profile.avatarUrl,
              }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View>
              <Name> {profile.name}</Name>
            </View>
            <View>
              <Name style={{ fontWeight: "bold" }}> {profile.login}</Name>
            </View>
          </View>
        </View>
        <View style={[styles.mg40, styles.bio]}>
          <Text>
            {profile.bio === null
              ? "This person does not have a bio."
              : profile.bio}
          </Text>
        </View>
        <View style={[styles.mg40, { flexDirection: "col" }]}>
          <LINE>
            <INFO>Website:</INFO>
            <VAL>{profile.url}</VAL>
          </LINE>
          <LINE>
            <INFO>Email:</INFO>
            <VAL>{profile.email}</VAL>
          </LINE>
          <LINE>
            <INFO>Public Repo:</INFO>
            <VAL
              style={styles.clickable}
              onPress={() =>
                repo_model.get(profile.login).then(
                  (resp) => {
                    navigation.navigate("Repos", {
                      login: profile.login,
                      repos: resp.data.data.user.repositories.nodes,
                    });
                  },
                  (err) => {}
                )
              }
            >
              {profile.repositories.totalCount}
            </VAL>
          </LINE>
          <LINE>
            <INFO>Followers:</INFO>
            <VAL
              onPress={() =>
                follower_model.get(profile.login).then(
                  (resp) => {
                    navigation.navigate("Follower", {
                      login: profile.login,
                      users: resp.data.data.user.followers.nodes,
                    });
                  },
                  (err) => {}
                )
              }
              style={styles.clickable}
            >
              {profile.followers.totalCount}
            </VAL>
          </LINE>
          <LINE>
            <INFO>Following:</INFO>
            <VAL
              onPress={() =>
                following_model.get(profile.login).then(
                  (resp) => {
                    navigation.navigate("Following", {
                      login: profile.login,
                      users: resp.data.data.user.following.nodes,
                    });
                  },
                  (err) => {}
                )
              }
              style={styles.clickable}
            >
              {profile.following.totalCount}
            </VAL>
          </LINE>
        </View>
        {/* <View>
          <Text>Created on 2020-10-17</Text>
        </View> */}
      </View>
    </Root>
  );
};

const styles = StyleSheet.create({
  clickable: {
    color: "blue",
    textDecorationLine: "underline",
  },
  name: {
    flexDirection: "row",
  },
  mg40: {
    marginTop: 32,
    marginLeft: 32,
    marginRight: 32,
  },
  bio: {
    borderWidth: 1.6,
    height: 100,
    padding: 6,
  },
  avatar: {
    height: 64,
    width: 64,
  },
  content: {
    backgroundColor: "white",
    height: "100%",
  },
  head: {
    flexDirection: "row",
    height: 100,
    marginTop: 40,
    // marginLeft: 40,
  },
  headTitle: {
    // backgroundColor: "blue",
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
export default Profile;

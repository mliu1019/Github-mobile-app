import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

const profile_model = require("../models/profile");

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
VAL.displayName = "VAL";

const LINE = styled.View`
  flex-direction: row;
  margin-bottom: 10;
`;

// const Head = styled.View`
//   flexDirection: "row";
//   height: 100;
// `;

const Profile = ({ route, navigation }) => {
  const { login } = route.params;
  const [profile, setProfile] = useState();

  useEffect(() => {
    // async function componentload() {
    //   let resp = await profile_model.get(login);
    //   setProfile(resp.data.data.user);
    // }
    // componentload();
    profile_model.get(login).then(
      (resp) => {
        setProfile(resp.data.data.user);
      },
      (err) => {}
    );
  }, []);

  return (
    <Root>
      {/* <View style={styles.head}>
        <View style={styles.headTitle}>
          <Text style={styles.titleText}>Profile</Text>
        </View>
      </View> */}
      {profile && (
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
              {profile.bio === ""
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
                  navigation.navigate("Repos", {
                    login: profile.login,
                  })
                }
              >
                {profile.repositories.totalCount}
              </VAL>
            </LINE>
            <LINE>
              <INFO>Followers:</INFO>
              <VAL
                onPress={() =>
                  navigation.navigate("Follower", {
                    login: profile.login,
                    type: "follower",
                  })
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
                  navigation.navigate("Following", {
                    login: profile.login,
                    type: "following",
                  })
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
      )}
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

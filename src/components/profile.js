import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components";
import { fetch_repositories } from "../utils/query";

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

const Profile = ({ navigation }) => {
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
                uri: "https://avatars3.githubusercontent.com/u/47225309?v=4",
              }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View>
              <Name> Name</Name>
            </View>
            <View>
              <Name style={{ fontWeight: "bold" }}> Github User</Name>
            </View>
          </View>
        </View>
        <View style={[styles.mg40, styles.bio]}>
          <Text>This person does not have a bio</Text>
        </View>
        <View style={[styles.mg40, { flexDirection: "col" }]}>
          <LINE>
            <INFO>Website:</INFO>
            <VAL>https://github.com/mliu1019</VAL>
          </LINE>
          <LINE>
            <INFO>Email:</INFO>
            <VAL>minerl2@illinois.edu</VAL>
          </LINE>
          <LINE>
            <INFO>Public Repo:</INFO>
            <VAL
              style={styles.clickable}
              onPress={() =>
                navigation.navigate("Repos", {
                  repos: fetch_repositories(),
                })
              }
            >
              11111
            </VAL>
          </LINE>
          <LINE>
            <INFO>Followers:</INFO>
            <VAL style={styles.clickable}>1</VAL>
          </LINE>
          <LINE>
            <INFO>Following:</INFO>
            <VAL style={styles.clickable}>1</VAL>
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

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import styled from "styled-components";

import { fetch_repositories } from "../utils/query";

const Root = styled.View`
  /* background-color: papayawhip; */
`;

// const Head = styled.View`
//   flexDirection: "row";
//   height: 100;
// `;

const RepoTitle = styled.Text`
  font-size: 24;
  font-weight: bold;
`;

const RepoTitleView = styled.View`
  align-items: center;
  padding: 4px;
  border-top-width: 1;
  border-left-width: 1;
  border-right-width: 1;
  height: 40;
`;

const RepoAuthor = styled.Text`
  font-size: 18;
  color: gray;
`;

const RepoAuthorView = styled.View`
  align-items: center;
  padding: 4px;
  border-top-width: 1;
  border-left-width: 1;
  border-right-width: 1;
  height: 32;
`;

const RepoDescriptionView = styled.View`
  padding: 10px;
  border-top-width: 1;
  border-bottom-width: 1;
  border-left-width: 1;
  border-right-width: 1;
  height: 62;
`;

const Repos = ({ route, navigation }) => {
  const { repos } = route.params;

  const repoItem = (repo) => {
    return (
      <View style={styles.repoItem}>
        <RepoTitleView>
          <RepoTitle>{repo.name}</RepoTitle>
        </RepoTitleView>
        <RepoAuthorView>
          <RepoAuthor>{repo.owner.login}</RepoAuthor>
        </RepoAuthorView>
        <RepoDescriptionView>
          <Text onPress={() => navigation.navigate("Profile")}>
            {repo.description}
          </Text>
        </RepoDescriptionView>
        {/* <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.4 }}>
            <Text>devops-intro-project</Text>
          </View>
          <View style={{ flex: 0.4 }}>
            <Text>Miranda Liu</Text>
          </View>
        </View>
        <View>
          <Text>Descriptions</Text>
        </View> */}
      </View>
    );
  };

  return (
    <Root>
      <View style={styles.head}>
        <View style={styles.headTitle}>
          <Text style={styles.titleText}>Miranda Liu</Text>
        </View>
        {/* <View style={styles.headAuthor}>
          <Text>Miranda Liu</Text>
        </View> */}
      </View>
      <ScrollView style={styles.repoList}>
        {/* <FlatList data={"list 1"} /> */}
        {repos.map((data) => repoItem(data))}
      </ScrollView>
    </Root>
  );
};

const styles = StyleSheet.create({
  repoList: {
    // backgroundColor: "red",
  },
  repoItem: {
    padding: 16,
    height: 150,
  },
  baseText: {
    fontFamily: "Cochin",
  },
  head: {
    flexDirection: "row",
    height: 100,
    // marginTop: 40,
    // marginLeft: 40,
  },
  headTitle: {
    // backgroundColor: "blue",
    flex: 0.8,
    marginLeft: 32,
    justifyContent: "center",
    // alignItems: "center",
  },
  headAuthor: {
    // backgroundColor: "red",
    flex: 0.5,
    justifyContent: "center",
    marginTop: 16,
    // alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 32,
  },
});
export default Repos;

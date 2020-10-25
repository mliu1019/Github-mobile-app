import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from "./shared/header";
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
  const { login, repos } = route.params;

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
          <Text>{repo.description}</Text>
        </RepoDescriptionView>
      </View>
    );
  };

  return (
    <Root>
      <Header login={login} />
      <ScrollView style={styles.repoList}>
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
  headAuthor: {
    // backgroundColor: "red",
    flex: 0.5,
    justifyContent: "center",
    marginTop: 16,
    // alignItems: "center",
  },
});
export default Repos;

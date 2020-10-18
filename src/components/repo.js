import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import styled from "styled-components";

const Root = styled.View`
  background-color: papayawhip;
`;

// const Head = styled.View`
//   flexDirection: "row";
//   height: 100;
// `;

const Repos = () => {
  useEffect(() => {});

  const repoItem = (repo) => {
    return (
      <View style={styles.repoItem}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.4 }}>
            <Text>devops-intro-project</Text>
          </View>
          <View style={{ flex: 0.4 }}>
            <Text>Miranda Liu</Text>
          </View>
        </View>
        <View>
          <Text>Descriptions</Text>
        </View>
      </View>
    );
  };

  return (
    <Root>
      <View style={styles.head}>
        <View style={styles.headTitle}>
          <Text style={styles.titleText}>Repos</Text>
        </View>
        <View style={styles.headAuthor}>
          <Text>Miranda Liu</Text>
        </View>
      </View>
      <ScrollView style={styles.repoList}>
        {/* <FlatList data={"list 1"} /> */}
        {repoItem()}
      </ScrollView>
    </Root>
  );
};

const styles = StyleSheet.create({
  repoList: {
    backgroundColor: "red",
  },
  repoItem: {
    padding: 32,
    height: 128,
  },
  baseText: {
    fontFamily: "Cochin",
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
  headAuthor: {
    // backgroundColor: "red",
    flex: 0.5,
    justifyContent: "center",
    marginTop: 16,
    // alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
export default Repos;

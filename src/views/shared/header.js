import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ login }) => {
  return (
    <View style={styles.head}>
      <View style={styles.headTitle}>
        <Text style={styles.titleText}>{login}</Text>
      </View>
      {/* <View style={styles.headAuthor}>
          <Text>Miranda Liu</Text>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "papayawhip",

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
  titleText: {
    fontWeight: "bold",
    fontSize: 32,
  },
});
export default Header;

import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    borderWidth: 3,
    backgroundColor: "red",
    //flex: 1,
    height: 50,
    width:50
  },
  viewTwoStyle: {
    borderWidth: 3,
    backgroundColor: "green",
    //flex: 1,
    height: 50,
    width:50,
    top: 50,
  },
  viewThreeStyle: {
    borderWidth: 3,
    backgroundColor: "purple",
    //flex: 1,
    height: 50,
    width: 50
  },
});

export default BoxScreen;

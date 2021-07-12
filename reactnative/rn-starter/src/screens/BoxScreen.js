import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor:"black"
    },
    textStyle: {
        borderWidth:10,
        borderColor: "red",
        margin: 20
    }
});

export default BoxScreen;

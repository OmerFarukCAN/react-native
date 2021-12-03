import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "center", // 'center', 'flex-end', 'flex-start'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    width: 70,
    height: 50,
    margin: 20,
    textAlign: "center",
  },
});

export default BoxScreen;

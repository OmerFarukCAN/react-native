import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Hi There!";
  const greeting1 = [123, 456];
  const greeting2 = ["asdf", "bbb"];
  const greeting3 = <Text>Hello to you!</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting}</Text>
      <Text>{greeting1}</Text>
      <Text>{greeting2}</Text>
      {greeting3}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;

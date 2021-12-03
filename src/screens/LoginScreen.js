import React from "react";
import { Button, Icon, Input, NativeBaseProvider } from "native-base";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";

const LoginScreen = () => {
  return (
    // Container Start
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Brand View */}
      <ImageBackground
        source={require("../../assets/trakyalogo.jpg")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      ></ImageBackground>
      {/* Bottom View */}
      <View style={styles.bottomView}>
        <View style={{ padding: 45 }}>
          <Text style={{ color: "#4632A1", fontSize: 34 }}>Welcome</Text>
          <Text style={{ fontSize: 17 }}>
            Don't have an account?
            <Text style={{ color: "red", fontStyle: "italic" }}>
              Register Now
            </Text>
          </Text>
          {/* Form Inputs View */}
          <NativeBaseProvider>
            <View style={{ marginTop: 50 }}>
              <Text style={{ padding: 5 }}>Email</Text>
              <Input value="design@test.com" keyboardType="email-address" />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ padding: 5 }}>Password</Text>
              <Input value="******" />
            </View>
            <View
              style={{
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button rounded style={styles.loginBtn}>
                <Text style={{ color: "#ffffff" }}>Login</Text>
              </Button>
            </View>
          </NativeBaseProvider>
        </View>
      </View>
    </ScrollView>
    // Container End
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: "#ffffff",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginBtn: {
    alignSelf: "center",
    backgroundColor: "#4632A1",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
  },
});

export default LoginScreen;

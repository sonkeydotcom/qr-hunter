import Background from "@/components/Background";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const SignInScreen = () => {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "green" }}>SignInScreen</Text>
      </SafeAreaView>
    </Background>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const SignInScreen = () => {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "green" }}>SignInScreen</Text>
        <CustomInput
          value=""
          title="password"
          onChangeText={(text) => console.log(text)}
        />

        <CustomButton title="signin" />
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

import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ForgotPasswordScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <Background>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        style={styles.container}
      >
        <View>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
              marginBottom: 10,
              alignSelf: "center",
              tintColor: "#cccccc",
            }}
          />
        </View>

        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.subtitle}>
          Please nter your email or phoen number to get reset your password.
        </Text>

        <CustomInput
          value={form.email}
          title="email"
          onChangeText={(text) => handleChange("email", text)}
        />

        <CustomButton
          onPress={() => router.navigate("/(auth)/verification")}
          title="Send code"
        />
      </ScrollView>
    </Background>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  title: {
    color: "#cccccc",
    fontSize: 30,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  subtitle: {
    color: "#cccccc",
    fontSize: 16,
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});

import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const SignInScreen = () => {
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
        <Text style={styles.title}>Sign in</Text>

        <CustomInput
          value={form.email}
          title="email"
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Enter email"
        />
        <CustomInput
          value={form.password}
          title="password"
          onChangeText={(text) => handleChange("password", text)}
          placeholder="Enter password"
        />
        <View>
          <Button
            onPress={() => router.push("/(auth)/forgot-password")}
            title="Forgot Password?"
            style={{
              color: "#cccccc",
              marginVertical: 10,
              justifyContent: "flex-end",
              textAlign: "right",
              alignSelf: "flex-end",
            }}
          />
        </View>

        <CustomButton onPress={() => console.log(form)} title="Sign In" />
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#cccccc",
              fontSize: 16,
            }}
          >
            {" "}
            Don't have an account?{" "}
          </Text>
          <Button
            title="Sign Up"
            onPress={() => router.navigate("/(auth)/sign-up")}
          />
        </View>
      </ScrollView>
    </Background>
  );
};

export default SignInScreen;

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
});

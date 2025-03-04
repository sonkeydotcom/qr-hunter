import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ResetPasswordScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [completed, setCompleted] = useState(true);

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
        {completed ? (
          <View
            style={{
              //   justifyContent: "center",
              //   alignContent: "center",
              alignItems: "center",
              paddingVertical: 150,
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../../assets/images/vector.png")}
              style={{
                // width: 150,
                // height: 150,
                resizeMode: "contain",
                marginVertical: 30,
              }}
            />
            <Text style={[styles.title, completed && { textAlign: "center" }]}>
              Password has been set successfully.
            </Text>

            <CustomButton
              onPress={() => setCompleted(false)}
              title="continue"
              containerStyle={{
                width: "100%",
              }}
            />
          </View>
        ) : (
          <>
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
            <Text style={styles.title}>Reset Password</Text>
            <CustomInput
              value={form.password}
              title="new password"
              onChangeText={(text) => handleChange("npassword", text)}
            />
            <CustomInput
              value={form.password}
              title="confirm new pssword"
              onChangeText={(text) => handleChange("cnpassword", text)}
            />
            <CustomButton
              onPress={() => router.navigate("/(auth)")}
              title="reset password"
            />
          </>
        )}
      </ScrollView>
    </Background>
  );
};

export default ResetPasswordScreen;

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
    marginBottom: 20,
  },
});

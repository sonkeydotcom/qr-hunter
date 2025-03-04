import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const SignUpScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [type, setType] = useState("organiser");

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
              width: 120,
              height: 120,
              resizeMode: "contain",
              marginBottom: 10,
              alignSelf: "center",
              tintColor: "#cccccc",
            }}
          />
        </View>
        <Text style={styles.description}>
          Play the new exciting build your own scavenger hunt game and see if
          you can solve the clues to win the game!{" "}
        </Text>
        <Text style={styles.description}>
          If you are a player, tap the button below. If you are an organiser,
          create your account using the fields below.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
            width: "100%",
          }}
        >
          <CustomButton
            title="organiser"
            onPress={() => setType("organiser")}
            buttonStyle={{
              opacity: type === "organiser" ? 1 : 0.5, // Fully visible when selected, faded otherwise
            }}
            containerStyle={{
              width: "50%",
            }}
          />
          <CustomButton
            title="player"
            onPress={() => setType("player")}
            buttonStyle={{
              opacity: type === "player" ? 1 : 0.5,
            }}
            containerStyle={{
              width: "50%",
            }}
          />
          ;
        </View>

        <CustomInput
          value={form.name}
          title="full name"
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Enter fullname"
        />
        <CustomInput
          value={form.dob}
          title="your age"
          onChangeText={(text) => handleChange("password", text)}
          placeholder="dd/mm/yyyy"
        />
        <CustomInput
          value={form.email}
          title="email"
          onChangeText={(text) => handleChange("password", text)}
          placeholder="enter email"
        />
        <CustomInput
          value={form.password}
          title="password"
          onChangeText={(text) => handleChange("password", text)}
          placeholder="enter password"
          secureTextEntry={true}
        />

        <CustomButton
          title="sign up"
          onPress={() => Alert.alert("Welcome", "We hope you enjoy playing")}
          containerStyle={{
            marginVertical: 30,
          }}
        />
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
            Already have an account?{" "}
          </Text>
          <Button title="Sign Up" onPress={() => router.navigate("/(auth)")} />
        </View>
      </ScrollView>
    </Background>
  );
};

export default SignUpScreen;

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
  },
  description: {
    color: "#cccccc",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
    maxWidth: "80%",
    alignSelf: "center",
  },
});

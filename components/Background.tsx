import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

type BackgroundProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Background = ({ children, style }: BackgroundProps) => {
  return (
    <LinearGradient
      colors={["#F5F5F5", "#E0E0E0"]} // Customize your gradient colors
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Background;

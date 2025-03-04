import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type BackgroundProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Background = ({ children, style }: BackgroundProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
      }}
    >
      <LinearGradient
        colors={["#F5F5F5", "#E0E0E0"]} // Customize your gradient colors
        style={styles.container}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // height: "100%",
  },
});
export default Background;

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
        // backgroundColor: "#425F77",
      }}
    >
      <LinearGradient
        colors={["#F882CA00", "#57E3EE00"]}
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
    backgroundColor: "#425F77",
  },
});
export default Background;

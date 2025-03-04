import React from "react";
import { StyleSheet, View } from "react-native";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Background;

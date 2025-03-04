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
    justifyContent: "center",
  },
});
export default Background;

import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton = ({
  title,
  containerStyle,
  buttonStyle,
  loading,
  onPress,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={disabled ? 1 : 0.5}
        disabled={disabled || loading}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#1e3f5b",
    padding: 15,
    paddingVertical: 18,
    alignItems: "center",
    borderRadius: 6,
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

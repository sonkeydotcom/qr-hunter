import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface CustomInputProps extends TextInput {
  title: string;
  containerStyle?: ViewStyle;
  inputStyle?: StyleProp<TextInput>;
  secureTextEntry?: boolean;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  title = "password",
  placeholder,
  onChangeText,
  containerStyle,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(title === "password");
  return (
    <View
      style={{
        paddingHorizontal: 5,
      }}
    >
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.container,
          { borderColor: isFocused ? "blue" : "#23323f" },
          containerStyle,
        ]}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={"#f5f5f5"}
          style={styles.input}
          secureTextEntry={title === "password" && secureTextEntry}
          {...props}
        />
        {title === "password" && (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={secureTextEntry ? "eye" : "eye-off"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    margin: 8,
    borderRadius: 8,
    height: 50,
    flexDirection: "row",
    borderColor: "red",
    backgroundColor: "#364F63",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingEnd: 10,
  },
  title: {
    marginHorizontal: 10,
    textTransform: "capitalize",
    color: "#cccccc",
    fontSize: 16,
    fontWeight: "500",
  },
  eyeIcon: {},
  input: {
    padding: 10,
    fontSize: 14,
    textAlign: "left",
    flex: 1,
    color: "#3b3b3b",
  },
});

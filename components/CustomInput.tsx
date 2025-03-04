import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
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
  onChangeText: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  title,
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
      style={[
        styles.container,
        { borderColor: isFocused ? "blue" : "#cccccc" },
        containerStyle,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#f5f5f5"}
        style={styles.input}
        secureTextEntry={secureTextEntry}
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
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {},
  eyeIcon: {},
  input: {},
});

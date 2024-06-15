import {
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const verification_code = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);

    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && values[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        className="h-full"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <Text className="text-gray-200 font-plight text-2xl p-8 text-center">
          enter the verification code
        </Text>

        <View className="flex flex-row justify-center items-center gap-3">
          {values.map((value, index) => (
            <View
              key={index}
              className="border-2 border-black-200 w-14 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row"
            >
              <TextInput
                ref={(ref) => (inputRefs.current[index] = ref)}
                className="flex-1 text-white font-psemibold text-base text-center"
                value={value}
                keyboardType="numeric"
                maxLength={1}
                placeholderTextColor="#7b7b8b"
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            </View>
          ))}
        </View>

        <CustomButton
          title="VERIFY"
          handlePress={() => router.replace("/(auth)/new_password")}
          containerStyle={"mt-10 w-1/2 mx-auto"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default verification_code;

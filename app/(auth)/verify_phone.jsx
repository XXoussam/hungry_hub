import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSegments } from "expo-router";

import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const verify_phone = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const segments = useSegments(); 
 

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

  const [counter, setCounter] = useState(60);

  useEffect(() => {
    // Start the countdown when the component mounts
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          clearInterval(timer); // Stop the interval when counter reaches 0
          return 0;
        } else {
          return prevCounter - 1;
        }
      });
    }, 1000); // Update every second (1000 ms)

    return () => clearInterval(timer);
  }, []);


  const restartCounter = () => {
    console.log("Restarting counter");
    setCounter(60);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center p-8">
          <View className="justify-center mt-8">
            <Text className="text-white text-3xl font-semibold">Verify</Text>
            <Text className="text-white text-3xl font-semibold">
              Phone number
            </Text>

            <Text className="text-white text-base mt-4">
              Enter the 4-digit code sent to you
            </Text>
            <Text className="text-white text-base">on +216 55 555 555</Text>

            <Text className="text-base text-gray-100 font-pmedium mt-8">
              Didn't receive the code?{" "}
              <TouchableOpacity>
                <Text className="text-secondary-100 font-semibold text-base mt-1">
                  Resend
                </Text>
              </TouchableOpacity>
            </Text>

            <View className="justify-center items-center">
              <Text className="text-white text-xl font-semibold mt-10">
                Resend in {counter} seconds {counter === 0 && restartCounter()}
              </Text>

              <View className="flex flex-row justify-center items-center gap-3 mt-4">
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
                title="SIGN UP"
                handlePress={() => {
                  router.push("/(auth)/sign-in");
                }}
                containerStyle="w-full mt-5"
                textStyle="text-xl text-white"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default verify_phone;

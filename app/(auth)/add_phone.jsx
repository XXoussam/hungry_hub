import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const add_phone = () => {

    const [phoneNumber, setPhoneNumber] = useState("");

    const handleChangeText = (text) => {
      // Check if input is exactly 8 digits
      if (/^\d{0,8}$/.test(text)) {
        setPhoneNumber(text);
      }
    };
  
    const handleVerifyNumber = () => {
      // Verify if phone number is exactly 8 digits
      if (phoneNumber.length === 8) {
        // Implement your navigation logic or action here
        console.log("Navigate to verification code screen");
      } else {
        Alert.alert("Invalid Phone Number", "Please enter exactly 8 digits.");
      }
    };
  

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center p-8">
          <View className="justify-center mt-8">
            <Text className="text-white text-3xl">Get Started With ,</Text>
            <Text className="text-white text-3xl font-semibold">
              HUNGER{" "}
              <Text className="text-secondary-100 font-semibold">HUB</Text>
            </Text>

            <Text className="text-white text-base mt-4">
                Enter your phone number to use hunger hub and enjoy every bite !
            </Text>

            <Text className="text-base text-gray-100 font-pmedium mt-8">
              Phone
            </Text>

            <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row mt-2">
              <View className="w-14">
                <Text className="text-white font-psemibold text-base">
                  +216
                </Text>
              </View>
              <TextInput
                className="flex-1 text-white font-psemibold text-base"
                value={phoneNumber}
                placeholder="Enter your phone number"
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                keyboardType="phone-pad"
                maxLength={8}
              />
            </View>

            <CustomButton
              title="Verify your Number"
              handlePress={() => router.push("/(auth)/verify_phone")}
              containerStyle={"mt-10"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default add_phone;

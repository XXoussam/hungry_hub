import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import FormField from "../../components/FormField";

const new_password = () => {
  const [Form, setForm] = useState({
    Password: "",
    ConfimPassword: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center p-8">
          <Text className="text-white font-medium text-3xl">
            Reset your password
          </Text>
          <Text className="text-white text-xl font-sans mt-3">
            Enter your new password below
          </Text>

          <View className="mt-8">
            <FormField
              title="Password"
              value={Form.Password}
              placeholder="type your new password"
              handleChangeText={(e) => setForm({ ...Form, Password: e })}
              otherStyles={"mt-4"}
            />

            <FormField
              title="Confirm Password"
              value={Form.ConfimPassword}
              placeholder="confirm your password"
              handleChangeText={(e) => setForm({ ...Form, ConfimPassword: e })}
              otherStyles={"mt-4"}
            />

            <CustomButton
              title="Reset Password"
              containerStyle={"mt-4"}
              handlePress={() => router.replace("/(auth)/sign-in")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default new_password;

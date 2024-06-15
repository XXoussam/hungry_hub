import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { icons } from "../../constants";

const forget_password = () => {
  const [Form, setForm] = useState({
    Email: "",
    Phone: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center p-8">
          <View className="flex flex-row">
            <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}>
              <Text className="text-3xl text-white">◀ </Text>
            </TouchableOpacity>
            <Text className="text-gray-200 font-plight text-2xl mt-1">
              {" "}
              Forget password
            </Text>
          </View>
          <View className="justify-center mt-8">
            <Text className="text-white text-3xl font-semibold">
              Reset Code
            </Text>

            <Text className="text-white text-lg mt-5">
              enter your email address and we will send you a code to reset your
              password
            </Text>

            <FormField
              title="Email"
              value={Form.Email}
              placeholder="type your email"
              handleChangeText={(e) => setForm({ ...Form, Email: e })}
              otherStyles={"mt-8"}
            />

            <CustomButton
              title="RESET PASSWORD"
              handlePress={() => router.push("/(auth)/verification_code")}
              containerStyle={"mt-10"}
            />

            <View className="flex flex-row justify-end mt-3">
              <Link href="/(auth)/verification_code">
                <Text className="text-white font-semibold text-base">use Phone Number ?</Text>
              </Link>
              </View>


          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default forget_password;

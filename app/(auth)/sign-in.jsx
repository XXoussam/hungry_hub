import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { icons } from "../../constants";

const signUp = () => {
  const [Form, setForm] = useState({
    Email: "",
    Password: "",
  });

  const handlePress = () => {
    console.log("Button pressed");
  };

  const [isLoading, setisLoading] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center p-8">
          <Text className="text-white text-3xl">
            Just{" "}
            <Text className="text-secondary-100 font-semibold">Sign in</Text>,{" "}
          </Text>
          <Text className="text-white text-3xl">🍔 Enjoy every bite!</Text>
          <Text className="text-white text-3xl">⭐️ Your reviews matter!</Text>

          <Text className="text-white text-lg mt-5">
            If you dont have an account ,
          </Text>
          <Text className="text-white text-lg">
            please{" "}
            <Link
              className="text-secondary-100 font-semibold"
              href="/(auth)/sign-up"
            >
              Sign Up here
            </Link>
          </Text>

          <FormField
            title="Email"
            value={Form.Email}
            placeholder="type your email"
            handleChangeText={(e) => setForm({ ...Form, Email: e })}
            otherStyles={"mt-4"}
          />

          <FormField
            title="Password"
            value={Form.Password}
            placeholder="type your password"
            handleChangeText={(e) => setForm({ ...Form, Password: e })}
            otherStyles={"mt-4"}
          />

          <View className="flex flex-row justify-end items-end">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/forget_password")}
            >
              <Text className="text-white text-lg mt-4">
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            title="SIGN IN"
            handlePress={() => {
              router.push("/");
            }}
            containerStyle="w-full mt-8"
            textStyle="text-xl text-white"
          />

          <View className="mt-8 w-80 justify-center items-center">
            <Text className="text-white text-lg mt-4">Or sign in with</Text>

            <TouchableOpacity
              onPress={handlePress}
              className={`bg-black-200 rounded-xl min-h-[62px] justify-center items-center w-full mt-4 ml-6
                  flex flex-1 flex-row  ${isLoading ? "opacity-50" : ""}`}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <Image source={icons.fbLogo} className="w-8 h-8 mr-4" />
              <Text className="text-white font-light text-lg">
                sign in with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;

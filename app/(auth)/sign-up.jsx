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
    Full_Name: "",
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
            Let's{" "}
            <Text className="text-secondary-100 font-semibold">
              Sign you up
            </Text>
            ,{" "}
          </Text>
          <Text className="text-white text-3xl">your meal awaits</Text>
          <Text className="text-white text-lg mt-4">
            If you have an account ,
          </Text>
          <Text className="text-white text-lg">
            please{" "}
            <Link
              className="text-secondary-100 font-semibold"
              href="/(auth)/sign-in"
            >
              Sign In here
            </Link>
          </Text>

          <FormField
            title="Full Name"
            value={Form.Full_Name}
            placeholder="type your full name"
            handleChangeText={(e) => setForm({ ...Form, Full_Name: e })}
            otherStyles={"mt-8"}
          />

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

          <CustomButton
            title="SIGN UP"
            handlePress={() => {
              router.push("/");
            }}
            containerStyle="w-full mt-5"
            textStyle="text-xl text-white"
          />

          <View className="mt-1 w-80 justify-center items-center">
            <Text className="text-white text-lg mt-4">
              By signing up, you agreed to our{" "}
              <Text className="text-secondary-100 font-medium">Terms</Text> &{" "}
              <Text className="text-secondary-100 font-medium">
                Privacy Policy
              </Text>
            </Text>

            <Text className="text-white text-lg mt-4">Or connect with</Text>

            <TouchableOpacity
              onPress={handlePress}
              className={`bg-black-200 rounded-xl min-h-[62px] justify-center items-center w-full mt-4 ml-6
                  flex flex-1 flex-row  ${isLoading ? "opacity-50" : ""}`}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <Image source={icons.fbLogo} className="w-8 h-8 mr-4" />
              <Text className="text-white font-light text-lg">
                connect with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;

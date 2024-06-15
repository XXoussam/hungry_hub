import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const welcome3 = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center items-center" style={{ marginTop: 80 }}>
          <Image
            source={images.foodieComm}
            resizeMode="contain"
            style={{ width: 300, height: 300 , borderRadius: 50}}
          />

          <Text className="text-2xl text-white font-semibold mt-5">
            Join Our Foodie Community
          </Text>

          <Text className="text-white text-center font-pregular mt-4 w-9/12">
            Follow top reviewers and stay updated on the latest food trends and
            must-try dishes.
          </Text>

          <View className="flex flex-row mt-4">
            <Text className="text-orange-200 text-center font-pregular text-8xl">
              .
            </Text>

            <Text className="text-orange-200 text-center font-pregular text-8xl">
              .
            </Text>
            <Text className="text-orange-500 text-center font-pregular text-8xl">
              .
            </Text>
          </View>

          <View className="mt-3">
            <CustomButton
              title="Sign Up"
              handlePress={() => {
                router.push("/(auth)/sign-up"); 
              }}
              containerStyle="w-60 mt-5"
              textStyle="text-xl"
            />
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default welcome3;

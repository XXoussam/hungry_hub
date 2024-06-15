import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const welcome1 = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center items-center">
          <Image
            source={images.welcome1}
            resizeMode="contain"
            style={{ width: 400, height: 400 }}
          />

          <Text className="text-2xl text-white font-semibold">Welcome to Foodie Haven</Text>
          

          <Text className="text-white text-center font-pregular mt-4 w-9/12">
          Discover the best places to eat with reviews from fellow food enthusiasts. Your culinary adventure starts here!
          </Text>

          <View className="flex flex-row mt-4">
            <Text className="text-orange-500 text-center font-pregular text-8xl"> 
              .
            </Text> 
            <Text className="text-orange-200 text-center font-pregular text-8xl">
              .
            </Text> 
            <Text className="text-orange-200 text-center font-pregular text-8xl">
              .
            </Text>
          </View>

          <View className="mt-3">
            <CustomButton
              title="Next"
              handlePress={() => {
                router.push("/welcome2");
              }}
              containerStyle="w-60 mt-5"
              textStyle="text-xl"
            />
            <CustomButton
              title="Skip"
              handlePress={() => {
                router.push("/");
              }}
              containerStyle="w-60 mt-5 bg-black-200"
              textStyle="text-xl text-white"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default welcome1;

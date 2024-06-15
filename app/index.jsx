import { ScrollView, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../constants";
import { images } from "../constants";
import * as Animatable from "react-native-animatable";
import { useRouter } from "expo-router";

const letters_hungry = "HUNGRY".split("");
const letters_slogan = "Your Hunger Partner".split("");

// Define custom animations
const zoomIn = {
  0: {
    scale: 0,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const zoomAndRotate = {
  from: {
    scale: 0,
    rotate: "-100deg",
  },
  to: {
    scale: 1,
    rotate: "0deg",
  },
};

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // router.replace('/welcome1');
      router.replace("/(auth)/verify_phone");
    }, 1000); // 3000 milliseconds = 3 seconds 

    return () => clearTimeout(timer); // Clean up the timer on unmount
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        className="h-full"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View className="flex flex-row justify-center items-center">
          <Text
            className="text-white text-4xl text-center p-11"
            style={{ fontFamily: "GulzarRegular" }}
          >
            👌 ذوق و قلي
          </Text>

          <Image
            source={images.path}
            className="w-1/3 absolute"
            resizeMode="contain"
          ></Image>
        </View>

        <View className="w-full justify-center items-center px-4">
          <Image
            source={icons.hungerLogo}
            resizeMode="cover"
            style={{ width: 300, height: 200 }}
          />
          <View className="flex flex-row mt-4">
            {letters_hungry.map((letter, index) => (
              <Animatable.Text
                key={index}
                animation="zoomIn"
                duration={500}
                delay={index * 100}
                className="text-slate-200 text-3xl font-pbold mt-3"
                style={{ letterSpacing: 4 }}
              >
                {letter}
              </Animatable.Text>
            ))}

            <Animatable.View
              animation={zoomAndRotate}
              duration={600}
              delay={500} // Delay to start after the text animations finish
              className="bg-secondary-200 rounded-lg p-1"
            >
              <Text className="text-primary text-3xl font-bold pt-1">HUB</Text>
            </Animatable.View>
          </View>

          <View className="flex flex-row mt-1">
            {letters_slogan.map((letter, index) => (
              <Animatable.Text
                key={index}
                animation="zoomIn"
                duration={200}
                delay={index * 50}
                className="text-white mt-1.5"
                style={{ letterSpacing: 4 }}
              >
                {letter}
              </Animatable.Text> 
            ))}
          </View>
 
          <View className="flex flex-row gap-2 mt-6">
            <Animatable.Image
              source={icons.humburger}
              resizeMode="contain"
              animation="zoomIn"
              duration={1500}
              delay={0}
              style={{ width: 25, height: 25 }}
              iterationCount="infinite"
            />

            <Animatable.Image
              source={icons.humburger}
              resizeMode="contain"
              animation="zoomIn"
              duration={1500}
              delay={500}
              style={{ width: 25, height: 25 }}
              iterationCount="infinite"
            />

            <Animatable.Image
              source={icons.humburger}
              resizeMode="contain"
              animation="zoomIn"
              duration={1500}
              delay={1000}
              style={{ width: 25, height: 25 }}
              iterationCount="infinite"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="forget_password"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="verification_code"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="new_password"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="add_phone"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="verify_phone"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light"></StatusBar>
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});

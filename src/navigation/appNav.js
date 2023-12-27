import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import TabBottomNav from "./tabBottomNav";

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainLayout"
      >
        <Stack.Screen name="MainLayout" component={TabBottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});

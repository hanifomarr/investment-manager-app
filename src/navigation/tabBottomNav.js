import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Market, Portfolio, Profile, Trade } from "../screens";
import { COLORS, icons } from "../constants";
import TabIcon from "../components/tabIcon";

const Tab = createBottomTabNavigator();

const TabBottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 140, backgroundColor: COLORS.primary },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={icons.home} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.briefcase}
                label="Portfolio"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.trade}
                label="Trade"
                isTrade={true}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.market} label="Market" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.profile} label="Profile" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBottomNav;

const styles = StyleSheet.create({});

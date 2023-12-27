import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const TabIcon = ({ focused, icon, label, isTrade, iconStyle }) => {
  if (isTrade) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.secondary,
          borderRadius: 30,
          width: 60,
          height: 60,
        }}
      >
        <Image
          source={icon}
          style={{
            height: 25,
            width: 25,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
        <Text style={{ color: COLORS.white }}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={icon}
          style={{
            height: 25,
            width: 25,
            tintColor: focused ? COLORS.white : COLORS.secondary,
            ...iconStyle,
          }}
        />
        <Text style={{ color: focused ? COLORS.white : COLORS.secondary }}>
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;

const styles = StyleSheet.create({});

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import { HomeScreen } from "./HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeybroad: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    paddingTop: 10, // Thêm padding top
    paddingBottom: 10, // Thêm padding bottom
  },
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={focused ? "#35A2C1" : "#BDBEC1"}
                />
                <Text color={focused ? "#35A2C1" : "#BDBEC1"}>Trang chủ</Text>
              </> 
            );
          },
        }}
      />
      <Tab.Screen
        name="login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <AntDesign
                  name="user"
                  size={24}
                  color={focused ? "#35A2C1" : "#BDBEC1"}
                />
                <Text>Tài khoản</Text>
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

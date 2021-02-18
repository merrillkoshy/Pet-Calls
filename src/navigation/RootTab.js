import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";
import HomeStackScreen from "./HomeStackScreen";
import ContactStackScreen from "./ContactStackScreen";

const Tab = createBottomTabNavigator();

const RootTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#F9AB2B",
        inactiveTintColor: "#0c0c0c"
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              focused={focused}
              name="home"
              size={size}
              color={color}
            ></Icon>
          )
        }}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Contact"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="phone"
              focused={focused}
              size={size}
              color={color}
            ></Icon>
          )
        }}
        component={ContactStackScreen}
      />
    </Tab.Navigator>
  );
};

export default RootTab;

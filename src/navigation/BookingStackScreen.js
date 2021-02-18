import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogoBox from "../components/header/LogoBox";
import MenuButton from "../components/header/MenuButton";
import { RFPercentage } from "react-native-responsive-fontsize";
import { BookingScreen } from "../screens";

const BookingStack = createStackNavigator();

export default function BookingStackScreen(props) {
  return (
    <BookingStack.Navigator>
      <BookingStack.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          headerTitleStyle: {
            alignSelf: "center",
            fontSize: RFPercentage(3),
            fontFamily: "Chocolate Bar Demo"
          },
          headerStyle: {
            backgroundColor: "#F9AB2B"
          },
          title: "Pet Calls",
          headerLeft: () => <LogoBox {...props} />,
          headerRight: () => <MenuButton {...props} />
        }}
      />
    </BookingStack.Navigator>
  );
}

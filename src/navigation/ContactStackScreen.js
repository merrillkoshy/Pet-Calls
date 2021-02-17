import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogoBox from "../components/header/LogoBox";
import MenuButton from "../components/header/MenuButton";
import { RFPercentage } from "react-native-responsive-fontsize";
import { ContactScreen } from "../screens";

const ContactStack = createStackNavigator();

export default function ContactStackScreen(props) {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerTitleStyle: {
            alignSelf: "center",
            fontSize: RFPercentage(3),
            fontFamily: "PetCallsPrimary"
          },
          headerStyle: {
            backgroundColor: "#F9AB2B"
          },
          title: "Pet Calls",
          headerLeft: () => <LogoBox {...props} />,
          headerRight: () => <MenuButton {...props} />
        }}
      />
    </ContactStack.Navigator>
  );
}

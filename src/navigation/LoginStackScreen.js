import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegistrationScreen } from "../screens";

const Stack = createStackNavigator();

export default function LoginStackScreen() {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </>
    </Stack.Navigator>
  );
}

import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, HomeScreen, RegistrationScreen } from "../screens";
import { decode, encode } from "base-64";
import LogoBox from "../components/header/LogoBox";
import MenuButton from "../components/header/MenuButton";
import { RFPercentage } from "react-native-responsive-fontsize";
// prettier-ignore
if (!global.btoa) {  global.btoa = encode }
// prettier-ignore
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function HomeStackScreen(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then(document => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch(error => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="Home"
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
        >
          {props => <HomeScreen {...props} extraData={user} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

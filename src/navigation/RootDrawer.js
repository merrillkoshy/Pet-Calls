import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import MenuDrawer from "../components/drawer/MenuDrawer";
import LoginStackScreen from "./LoginStackScreen";
import RootTab from "./RootTab";
const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuDrawer {...props} />}
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: "#FFFFFF",
        width: 240
      }}
      drawerContentOptions={{
        activeTintColor: "#F9AB2B",
        inactiveTintColor: "#0c0c0c"
      }}
    >
      <Drawer.Screen name="Home" component={RootTab} />
      <Drawer.Screen name="Login" component={LoginStackScreen} />
    </Drawer.Navigator>
  );
};

export default RootDrawer;

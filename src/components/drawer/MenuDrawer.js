import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

function MenuDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default MenuDrawer;

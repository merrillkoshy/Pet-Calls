import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { DrawerActions } from "@react-navigation/core";

function MaterialButtonHamburger(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Icon name="menu" style={styles.caption}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(249,171,43,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2
  },
  caption: {
    color: "#fff",
    fontSize: RFPercentage(5)
  }
});

export default MaterialButtonHamburger;

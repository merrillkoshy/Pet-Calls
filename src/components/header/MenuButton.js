import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import MaterialButtonHamburger from "./MaterialButtonHamburger";

function MenuButton(props) {
  return (
    <View style={styles.logoBackgroundStackRow}>
      <View>
        <MaterialButtonHamburger
          {...props}
          style={styles.materialButtonHamburger}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  materialButtonHamburger: {
    position: "absolute",
    width: 36,
    height: 36
  },
  logoBackgroundStackRow: {
    top: 10,
    right: 40,
    height: 0,
    position: "absolute",
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 27
  }
});

export default MenuButton;

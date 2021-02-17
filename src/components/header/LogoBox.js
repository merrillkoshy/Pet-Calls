import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
function LogoBox(props) {
  return (
    <View style={styles.logoBackgroundStack}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Svg viewBox="0 0 64.8 64.8" style={styles.logoBackground}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(249,171,43,1)"
            cx={32}
            cy={32}
            rx={32}
            ry={32}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../../../assets/icon.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  logoBackground: {
    top: 0,
    left: 20,
    width: 56,
    height: 56,
    position: "absolute"
  },
  logo: {
    top: 0,
    left: 21,
    width: 54,
    height: 54,
    position: "absolute"
  },
  logoBackgroundStack: {
    width: 56,
    height: 56
  }
});
export default LogoBox;

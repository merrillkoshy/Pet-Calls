import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  container: {},
  scrollArea3: {
    width: 291,

    backgroundColor: "rgba(230,230,230,0.4)",
    borderRadius: 30
  },
  scrollArea3_contentContainerStyle: {
    height: 491,
    width: 291
  },
  materialCardWithImageAndTitle1: {
    height: 103,
    width: 266,
    borderRadius: 30,
    marginTop: 15,
    marginLeft: 10
  },
  pets: {
    fontFamily: "Chocolate Bar Demo",
    color: "#121212",
    fontSize: RFPercentage(3),
    marginTop: 20,
    marginLeft: 118
  },
  rect2: {
    width: 70,
    height: 8,
    backgroundColor: "rgba(12,12,12,1)",
    marginTop: 8,
    marginLeft: 118
  },
  scrollArea3Row: {
    height: 491,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 45,
    marginRight: -1
  },
  hiUser1: {
    fontFamily: "Sofia Pro",
    color: "#121212",

    fontSize: RFPercentage(3)
  },
  ourServices: {
    fontFamily: "Sofia Pro",
    color: "#121212",
    fontSize: RFPercentage(3),
    marginLeft: Dimensions.get("window").width / 5
  },
  hiUser1Row: {
    flexDirection: "row",

    marginTop: 44,
    marginLeft: 25
  }
});

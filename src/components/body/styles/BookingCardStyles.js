import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#CCC",
    height: 100,
    flexWrap: "nowrap",
    backgroundColor: "rgba(249,171,43,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
    flexDirection: "row"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    top: 12,
    left: 186,
    position: "absolute",
    color: "rgba(12,12,12,1)",
    fontSize: RFPercentage(3)
  },
  yourCurrentBooking: {
    top: 25,
    left: 19,
    position: "absolute",
    fontFamily: "Minimo",
    color: "#121212",
    fontSize: RFPercentage(2.1)
  }
});

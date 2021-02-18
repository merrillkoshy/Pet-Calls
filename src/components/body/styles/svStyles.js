import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  serviceItem: {
    height: 16,
    flexDirection: "column",
    marginTop: 12,
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center"
  },
  image4Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 15,
    marginRight: 16
  },
  scrollArea4: {
    width: 291,
    height: 491,
    backgroundColor: "rgba(230,230,230,0.4)",
    borderRadius: 30,
    marginLeft: 22
  },
  scrollArea4_contentContainerStyle: {
    height: 491,
    width: 291
  },
  icon8: {
    color: "rgba(12,12,12,1)",
    fontSize: RFPercentage(3),
    height: 50,
    width: 54
  },
  icon9: {
    color: "rgba(12,12,12,1)",
    fontSize: RFPercentage(3),
    height: 59,
    width: 54,
    marginLeft: 80
  },
  icon8Row: {
    flexDirection: "row",
    marginTop: 66,
    marginLeft: 50,
    marginRight: 53
  },
  cutting: {
    marginTop: 5,
    fontFamily: "Minimo",
    color: "#121212"
  },
  combing: {
    fontFamily: "Minimo",
    color: "#121212",
    marginLeft: 85
  },
  cuttingRow: {
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 59,
    marginRight: 46
  },
  icon10: {
    color: "rgba(12,12,12,1)",
    fontSize: RFPercentage(3),
    height: 50,
    width: 54
  },
  icon11: {
    color: "rgba(12,12,12,1)",
    fontSize: RFPercentage(3),
    height: 59,
    width: 54,
    marginLeft: 80
  },
  icon10Row: {
    flexDirection: "row",
    marginTop: 47,
    marginLeft: 50,
    marginRight: 53
  },
  cutting1: {
    fontFamily: "Minimo",
    color: "#121212"
  },
  combing1: {
    fontFamily: "Minimo",
    color: "#121212",
    marginLeft: 85
  },
  cutting1Row: {
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 59,
    marginRight: 46
  }
});

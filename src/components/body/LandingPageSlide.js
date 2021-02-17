import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import DataCard from "./DataCard";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Pets from "./Pets";
import { firebase } from "../../firebase/config";

import SkeletonContent from "react-native-skeleton-content";

function LandingPageSlide(props) {
  const db = firebase.database();
  const [data, setData] = useState({});
  const [serv, setServ] = useState({});
  const petsRef = db.ref("Pet_names");
  const servicesRef = db.ref("Pet_services");

  var pets = [];
  var services = [];
  useEffect(() => {
    petsRef.on("value", snap => {
      snap.forEach(child => {
        pets.push(child.val());
      });
      setData(pets);
    });
    servicesRef.on("value", snap => {
      snap.forEach(child => {
        services.push(child.val());
      });
      setServ(services);
    });
  }, []);

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.scrollArea3Row}>
        <View style={styles.scrollArea3}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea3_contentContainerStyle}
          >
            <DataCard style={styles.materialCardWithImageAndTitle1}></DataCard>
            <Text style={styles.pets}>Pets</Text>
            <View style={styles.rect2}></View>
            {data.length > 0 ? <Pets pets={data} /> : <Text>""</Text>}
          </ScrollView>
        </View>
        <View style={styles.scrollArea4}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea4_contentContainerStyle}
          >
            {serv.length > 0 ? (
              serv.map(sv => {
                return (
                  <>
                    <View style={styles.icon8Row}>
                      <EntypoIcon
                        name={sv.icon_name}
                        style={styles.icon8}
                      ></EntypoIcon>
                    </View>
                    <View style={styles.cuttingRow}>
                      <Text style={styles.cutting}>{sv.name}</Text>
                    </View>
                  </>
                );
              })
            ) : (
              <SkeletonContent
                containerStyle={{ flex: 1, width: 300 }}
                boneColor="#121212"
                highlightColor="#333333"
                animationType="pulse"
                isLoading={serv.length > 0}
              />
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.hiUser1Row}>
        <Text style={styles.hiUser1}>Hi, User</Text>
        <Text style={styles.ourServices}>Our Services</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: "PetCallsPrimary",
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
  },
  scrollArea3Row: {
    height: 491,
    flexDirection: "row",
    marginTop: 88,
    marginLeft: 45,
    marginRight: -1
  },
  hiUser1: {
    fontFamily: "Sofia",
    color: "#121212",

    fontSize: RFPercentage(3)
  },
  ourServices: {
    fontFamily: "Sofia",
    color: "#121212",
    fontSize: RFPercentage(3),
    marginLeft: Dimensions.get("window").width / 2.1
  },
  hiUser1Row: {
    flexDirection: "row",
    marginTop: -553,
    marginLeft: 63,
    marginRight: 209
  }
});

export default LandingPageSlide;

import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import DataCard from "./DataCard";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Pets from "./Pets";
import { firebase } from "../../firebase/config";
import styles from "./styles/LandingPageStyles";
import SkeletonContent from "react-native-skeleton-content";
import Services from "./Services";

function LandingPageSlide(props) {
  const userName = props.userData.fullName;
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
      <View style={styles.hiUser1Row}>
        <Text style={styles.hiUser1}>Hi, {userName}</Text>
        <Text style={styles.ourServices}>Our Services</Text>
      </View>
      <View style={styles.scrollArea3Row}>
        <View style={styles.scrollArea3}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea3_contentContainerStyle}
          >
            <DataCard
              userData={props.userData}
              style={styles.materialCardWithImageAndTitle1}
            ></DataCard>
            <Text style={styles.pets}>Pets</Text>
            <View style={styles.rect2}></View>
            {data.length > 0 ? (
              <Pets pets={data} />
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
        {serv.length > 0 ? (
          <Services services={serv} />
        ) : (
          <SkeletonContent
            containerStyle={{ flex: 1, width: 300 }}
            boneColor="#121212"
            highlightColor="#333333"
            animationType="pulse"
            isLoading={serv.length > 0}
          />
        )}
      </View>
    </View>
  );
}

export default LandingPageSlide;

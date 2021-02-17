import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import styles from "./styles";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function ContactScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contactArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.contactArea_contentContainerStyle}
        >
          <Text style={styles.address}>
            1 Sheikh Mohammed bin Rashid Blvd{"\n"}Downtown Dubai{"\n"}Dubai,
            U.A.E
          </Text>
          <View style={styles.iconRow}>
            <MaterialCommunityIconsIcon
              name="phone"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.loremIpsum}>+97123345778</Text>
          </View>
          <View style={styles.icon1Row}>
            <EntypoIcon name="mail" style={styles.icon1}></EntypoIcon>
            <Text style={styles.jdoePetcallsAe}>jdoe@petcalls.ae</Text>
          </View>
          <View style={styles.icon2Row}>
            <FeatherIcon name="globe" style={styles.icon2}></FeatherIcon>
            <Text style={styles.petCallsAe}>PetCalls.ae</Text>
            <Text style={styles.loremIpsum2}></Text>
          </View>
          <View style={styles.icon3Row}>
            <EntypoIcon name="instagram" style={styles.icon3}></EntypoIcon>
            <EntypoIcon name="facebook" style={styles.icon4}></EntypoIcon>
            <EntypoIcon name="twitter" style={styles.icon5}></EntypoIcon>
            <EntypoIcon name="youtube" style={styles.icon6}></EntypoIcon>
          </View>
        </ScrollView>
      </View>
      <Text style={styles.copyrights}>
        ©2021 PetCalls LLC. All rights reserved.
      </Text>
    </View>
  );
}

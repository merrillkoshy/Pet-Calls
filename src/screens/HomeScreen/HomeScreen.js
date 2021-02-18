import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import LandingPageSlide from "../../components/body/LandingPageSlide";
import { v4 as uuidv4 } from "uuid";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.landingPageSCrollArea}>
        <ScrollView horizontal>
          <LandingPageSlide
            key={uuidv4()}
            {...props}
            userData={props.extraData}
            style={styles.landingPageSlide}
          ></LandingPageSlide>
        </ScrollView>
      </View>
    </View>
  );
}

import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import LandingPageSlide from "../../components/body/LandingPageSlide";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.landingPageSCrollArea}>
        <ScrollView horizontal>
          <LandingPageSlide style={styles.landingPageSlide}></LandingPageSlide>
        </ScrollView>
      </View>
    </View>
  );
}

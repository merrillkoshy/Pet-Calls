import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";

function Pets(props) {
  const [petData, setPetData] = useState();
  useEffect(() => {
    setPetData(props.pets);
  }, []);

  return (
    <View style={styles.petScrollArea}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.petScrollArea_contentContainerStyle}
      >
        <View style={styles.image4Row}>
          {petData &&
            petData.map(item => {
              return (
                <Image
                  source={{ uri: item.image }}
                  resizeMode="contain"
                  style={styles.image1}
                />
              );
            })}
        </View>
        <View style={styles.dogsAndPuppies2Row}>
          {petData &&
            petData.map(item => {
              return <Text style={styles.dogsAndPuppies2}>{item.name}</Text>;
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  petScrollArea: {
    top: 200,
    left: 5,
    width: 281,
    height: 277,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30
  },
  petScrollArea_contentContainerStyle: {
    height: 637,
    width: 281
  },
  image4: {
    width: 118,
    height: 118,
    borderRadius: 30
  },
  image3: {
    width: 118,
    height: 118,
    borderRadius: 30,
    marginLeft: 14
  },
  image4Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 15,
    marginRight: 16
  },
  dogsAndPuppies2: {
    fontFamily: "Minimo",
    color: "#121212"
  },
  catsAndKittens2: {
    fontFamily: "Minimo",
    color: "#121212",
    marginLeft: 28
  },
  dogsAndPuppies2Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 18,
    marginRight: 20
  },
  image1: {
    width: 118,
    height: 118,
    borderRadius: 30
  },
  image2: {
    width: 118,
    height: 118,
    borderRadius: 30,
    marginLeft: 14
  },
  image1Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 15,
    marginRight: 16
  },
  dogsAndPuppies1: {
    fontFamily: "Minimo",
    color: "#121212"
  },
  catsAndKittens1: {
    fontFamily: "Minimo",
    color: "#121212",
    marginLeft: 28
  },
  dogsAndPuppies1Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 18,
    marginRight: 20
  },
  image8: {
    width: 118,
    height: 118,
    borderRadius: 30
  },
  image7: {
    width: 118,
    height: 118,
    borderRadius: 30,
    marginLeft: 14
  },
  image8Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 15,
    marginRight: 16
  },
  dogsAndPuppies4: {
    fontFamily: "Minimo",
    color: "#121212"
  },
  catsAndKittens4: {
    fontFamily: "Minimo",
    color: "#121212",
    marginLeft: 28
  },
  dogsAndPuppies4Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 18,
    marginRight: 20
  },
  image5: {
    width: 118,
    height: 118,
    borderRadius: 30
  },
  image6: {
    width: 118,
    height: 118,
    borderRadius: 30,
    marginLeft: 14
  },
  image5Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 15,
    marginRight: 16
  },
  dogsAndPuppies3: {
    fontFamily: "Minimo",
    color: "#121212"
  },
  catsAndKittens3: {
    fontFamily: "Minimo",
    color: "#121212",
    marginLeft: 28
  },
  dogsAndPuppies3Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 18,
    marginRight: 20
  }
});

export default Pets;

import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView } from "react-native";
import styles from "./styles/PetsStyles";
import { v4 as uuidv4 } from "uuid";

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
                <View key={uuidv4()} style={styles.PetItemBox}>
                  <Image
                    key={uuidv4()}
                    source={{ uri: item.image }}
                    resizeMode="contain"
                    style={styles.image1}
                  />
                  <Text key={uuidv4()} style={styles.dogsAndPuppies2}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Pets;

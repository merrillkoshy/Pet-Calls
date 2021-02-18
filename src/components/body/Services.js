import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView } from "react-native";
import styles from "./styles/svStyles";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { v4 as uuidv4 } from "uuid";
export default function Services(props) {
  const [servicesData, setServicesData] = useState();
  useEffect(() => {
    setServicesData(props.services);
  }, []);

  return (
    <View style={styles.scrollArea4}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollArea4_contentContainerStyle}
      >
        <View style={styles.image4Row}>
          {servicesData &&
            servicesData.map(sv => {
              return (
                <View key={uuidv4()} style={styles.serviceItem}>
                  <EntypoIcon
                    name={sv.icon_name}
                    style={styles.icon8}
                  ></EntypoIcon>

                  <Text style={styles.cutting}>{sv.name}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles/BookingCardStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function DataCard(props) {
  const userData = props.userData;
  return (
    <View style={[styles.container, props.style]}>
      {userData.booking ? (
        <View style={styles.cardBody}>
          <Icon name="ticket" style={styles.icon}></Icon>
          <Text style={styles.yourCurrentBooking}>Your Current Booking</Text>
        </View>
      ) : (
        <View style={styles.cardBody}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Booking")}
          >
            <Icon name="plus" style={styles.icon}></Icon>
            <Text style={styles.yourCurrentBooking}>Book Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default DataCard;

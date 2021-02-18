import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles/BookingCardStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function DataCard(userData, ...props) {
  return (
    <View style={[styles.container, props.style]}>
      {userData.booking ? (
        <View style={styles.cardBody}>
          <Icon name="ticket" style={styles.icon}></Icon>
          <Text style={styles.yourCurrentBooking}>Your Current Booking</Text>
        </View>
      ) : (
        <View style={styles.cardBody}>
          <Icon name="plus" style={styles.icon}></Icon>
          <Text style={styles.yourCurrentBooking}>Book Now</Text>
        </View>
      )}
    </View>
  );
}

export default DataCard;

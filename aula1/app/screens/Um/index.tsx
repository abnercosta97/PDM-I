import { View } from "react-native";
import styles from "./styles";
import React from "react";

export default function Um() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection} />
      <View style={styles.bottomSection} />
    </View>
  );
}

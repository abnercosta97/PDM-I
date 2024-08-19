import { View } from "react-native";
import styles from "./styles";
import React from "react";

export default function Dois() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection} />
        <View style={styles.rightSection} />
      </View>

      <View style={styles.bottomSection} />
    </View>
  );
}

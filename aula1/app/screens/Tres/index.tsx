import { View } from "react-native";
import styles from "./styles";
import React from "react";

export default function Tres() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection} />
        <View style={styles.rightSection}>
          <View style={styles.rightTopSection} />
          <View style={styles.rightBottomSection} />
        </View>
      </View>

      <View style={styles.bottomSection} />
    </View>
  );
}

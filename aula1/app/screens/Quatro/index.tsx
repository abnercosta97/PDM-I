import { View, Image } from "react-native";
import styles from "./styles";
import React from "react";
import logo from "../../assets/adaptive-icon.png";

export default function Quatro() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.rightTopSection}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.rightBottomSection}>
            <Image source={logo} style={styles.logo} />
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
}

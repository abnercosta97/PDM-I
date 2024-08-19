import { View, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import React from "react";
import logo from "../../assets/adaptive-icon.png";

export default function Cinco() {
  const showAlert = () => {
    Alert.alert("Boa noite!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection}>
          <TouchableOpacity style={styles.button} onPress={showAlert}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightSection}>
          <View style={styles.rightTopSection}>
            <TouchableOpacity style={styles.button} onPress={showAlert}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightBottomSection}>
            <TouchableOpacity style={styles.button} onPress={showAlert}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={showAlert}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

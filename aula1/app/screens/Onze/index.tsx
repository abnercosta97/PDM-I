import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type OnzeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Onze">;
type OnzeScreenRouteProp = RouteProp<RootStackParamList, "Onze">;

type Props = {
  navigation: OnzeScreenNavigationProp;
  route: OnzeScreenRouteProp;
};

export default function Onze({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.globalDiv}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/fatec-logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>HOME</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Um")}
          >
            <Text style={styles.buttonText}>Um</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Dois")}
          >
            <Text style={styles.buttonText}>Dois</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Tres")}
          >
            <Text style={styles.buttonText}>Três</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Quatro")}
          >
            <Text style={styles.buttonText}>Quatro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Cinco")}
          >
            <Text style={styles.buttonText}>Cinco</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Seis")}
          >
            <Text style={styles.buttonText}>Seis</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Sete")}
          >
            <Text style={styles.buttonText}>Sete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Oito")}
          >
            <Text style={styles.buttonText}>Oito</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Nove")}
          >
            <Text style={styles.buttonText}>Nove</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Dez")}
          >
            <Text style={styles.buttonText}>Dez</Text>
          </TouchableOpacity>
          {/* Continue adicionando botões para cada exercício */}
        </View>
      </View>
    </SafeAreaView>
  );
}

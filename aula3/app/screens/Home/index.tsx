import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStack";
interface Props extends NativeStackScreenProps<RootStackParamList, "Home"> {}
const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <View style={styles.rowButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sms")}
        >
          <Text style={styles.buttonLabel}>SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Whatsapp")}
        >
          <Text style={styles.buttonLabel}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Mail")}
        >
          <Text style={styles.buttonLabel}>E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Maps")}
        >
          <Text style={styles.buttonLabel}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Mail")}
        >
          <Text style={styles.buttonLabel}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ContactsComponent")}
        >
          <Text style={styles.buttonLabel}>Contatos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;

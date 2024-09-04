import React from "react";
import {
  View,
  Button,
  Alert,
  Linking,
  SafeAreaView,
  Platform,
} from "react-native";
import styles from "./styles";

const Sms: React.FC = () => {
  const sendSms = () => {
    const phoneNumber = "12988888680";
    let url = "";

    if (Platform.OS === "ios") {
      url = `sms:${phoneNumber}`;
    } else {
      const message =
        "Boa noite!\nCorpo da mensagem a ser enviada.\nAtenciosamente. \nMensagem enviada pelo app de SMS.";
      url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    }

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Erro", "Este dispositivo não suporta envio de SMS.");
        }
      })
      .catch((err) => console.error("Erro ao enviar SMS", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Enviar SMS" onPress={sendSms} />
      </View>
    </SafeAreaView>
  );
};

export default Sms;

import {
  Camera,
  CameraType,
  useCameraPermissions,
  CameraType as CameraFacing,
} from "expo-camera";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function App() {
  const [type, setType] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      if (!permission) {
        await requestPermission();
      }
    })();
  }, [permission]);

  const handleBarCodeScanned = async ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    Alert.alert(
      "Código de barras escaneado!",
      `Tipo: ${type}\nCódigo: ${data}`
    );

    // Chamada para a API da Open Food Facts com o código de barras escaneado
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${data}.json`
    );
    const product = await response.json();
    console.log("Aqui!!!", product);

    if (product.status === 1) {
      const { product_name, nutriments } = product.product;
      Alert.alert(
        "Produto encontrado!",
        `Nome: ${product_name}\nCalorias: ${nutriments["energy-kcal"]} kcal`
      );
    } else {
      Alert.alert(
        "Produto não encontrado",
        "Não foi possível encontrar informações para esse código de barras."
      );
    }

    // Reinicia o escaneamento após a exibição do alerta
    setScanned(false);
  };

  if (!permission || !permission.granted) {
    // As permissões da câmera ainda estão carregando ou não foram concedidas
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Precisamos da sua permissão para acessar a câmera
        </Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }
  function toggleCameraFacing() {
    setType((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        type={type}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Inverter Câmera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "./types/rootStack";
import Sms from "./screens/sms";
import Whatsapp from "./screens/WhatsApp";
import Home from "./screens/Home";
import Mail from "./screens/Email";
import Maps from "./screens/Maps";
import ContactsComponent from "./screens/Contacts";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <RootStack.Screen
          name="Sms"
          component={Sms}
          options={{ title: "Início" }}
        />
        <RootStack.Screen
          name="Whatsapp"
          component={Whatsapp}
          options={{ title: "WhatsApp" }}
        />
        <RootStack.Screen
          name="Mail"
          component={Mail}
          options={{ title: "Email" }}
        />
        <RootStack.Screen
          name="Maps"
          component={Maps}
          options={{ title: "Maps" }}
        />
        <RootStack.Screen
          name="ContactsComponent"
          component={ContactsComponent}
          options={{ title: "Contatos" }}
        />

        {/*}
        <RootStack.Screen name="Um" component={Um} />
        <RootStack.Screen name="Dois" component={Dois} />
        <RootStack.Screen name="Tres" component={Tres} />
        <RootStack.Screen name="Quatro" component={Quatro} />
        <RootStack.Screen name="Cinco" component={Cinco} />
*/}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cinco from "./screens/Cinco";
import Dez from "./screens/Dez";
import Dois from "./screens/Dois";
import Home from "./screens/Home";
import Nove from "./screens/Nove";
import Oito from "./screens/Oito";
import Quatro from "./screens/Quatro";
import Seis from "./screens/Seis";
import Sete from "./screens/Sete";
import Tres from "./screens/Tres";
import Um from "./screens/Um";
import Onze from "./screens/Onze";
import { RootStackParamList } from "./types/rootStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

//const RootStack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Um"
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            let iconName: string;
            switch (route.name) {
              case "Um":
                iconName = "rose";
                break;
              case "Dois":
                iconName = "planet";
                break;
              case "Tres":
                iconName = "people";
                break;
              case "Quatro":
                iconName = "person-add";
                break;
              case "Cinco":
                iconName = "medical";
                break;
              case "Seis":
                iconName = "globe";
                break;
              case "Sete":
                iconName = "cloud-download";
                break;
              case "Oito":
                iconName = "nuclear";
                break;
              case "Nove":
                iconName = "rocket";
                break;
              case "Dez":
                iconName = "paper-plane";
                break;
              case "Onze":
                iconName = "jet";
                break;
              default:
                iconName = "alert-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Um" component={Um} />
        <Drawer.Screen name="Dois" component={Dois} />
        <Drawer.Screen name="Tres" component={Tres} />
        <Drawer.Screen name="Quatro" component={Quatro} />
        <Drawer.Screen name="Cinco" component={Cinco} />
        <Drawer.Screen name="Seis" component={Seis} />
        <Drawer.Screen name="Sete" component={Sete} />
        <Drawer.Screen name="Oito" component={Oito} />
        <Drawer.Screen name="Nove" component={Nove} />
        <Drawer.Screen name="Dez" component={Dez} />
        <Drawer.Screen name="Onze" component={Onze} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

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

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Onze">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Um" component={Um} />
        <RootStack.Screen name="Dois" component={Dois} />
        <RootStack.Screen name="Tres" component={Tres} />
        <RootStack.Screen name="Quatro" component={Quatro} />
        <RootStack.Screen name="Cinco" component={Cinco} />
        <RootStack.Screen name="Seis" component={Seis} />
        <RootStack.Screen name="Sete" component={Sete} />
        <RootStack.Screen name="Oito" component={Oito} />
        <RootStack.Screen name="Nove" component={Nove} />
        <RootStack.Screen name="Dez" component={Dez} />
        <RootStack.Screen name="Onze" component={Onze} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

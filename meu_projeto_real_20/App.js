import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import TelaInicial from "./components/TelaInicial";
import TelaConsoles from "./components/TelaConsoles";
import TelaJogos from "./components/TelaJogos";
import TelaNuvem from "./components/TelaNuvem";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component={TelaInicial} />
        <Stack.Screen name="Consoles" component={TelaConsoles} />
        <Stack.Screen name="Jogos" component={TelaJogos} />
        <Stack.Screen name="Nuvem" component={TelaNuvem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

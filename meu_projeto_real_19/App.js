import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import TelaInicial from "./components/TelaInicial";
import TelaRestaurantes from "./components/TelaRestaurantes";
import TelaPasseios from "./components/TelaPasseios";
import TelaHospedagem from "./components/TelaHospedagem";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Restaurantes" component={TelaRestaurantes} />
        <Stack.Screen name="Passeios" component={TelaPasseios} />
        <Stack.Screen name="Hospedagem" component={TelaHospedagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

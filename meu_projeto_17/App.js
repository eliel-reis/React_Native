import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import TelaHome from "./components/TelaHome";
import TelaDescricao from "./components/TelaDescricao";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Home" component={TelaHome} />
        <Stack.Screen name="Tela Descrição" component={TelaDescricao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

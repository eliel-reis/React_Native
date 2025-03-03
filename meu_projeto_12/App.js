import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicial from "./components/TelaInicial";
import TelaPerfil from "./components/TelaPerfil";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component={TelaInicial} />
        <Tabs.Screen name="Perfil" component={TelaPerfil} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

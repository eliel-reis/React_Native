import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

import TelaInicial from "./components/TelaInicial";
import TelaSobre from "./components/TelaSobre";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Tela inicial" component={TelaInicial} />
        <Tabs.Screen name="Tela sobre" component={TelaSobre} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

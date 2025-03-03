import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaAzul from "./components/TelaAzul";
import TelaVermelha from "./components/TelaVermelha";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tela Azul" component={TelaAzul} />
        <Drawer.Screen name="Tela Vermelha" component={TelaVermelha} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

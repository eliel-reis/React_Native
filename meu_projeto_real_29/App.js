import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Feather, Fontisto } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

import TelaSalario from "./components/TelaSalario/";
import TelaInflacao from "./components/TelaInflacao/";
import TelaSalarioXInflacao from "./components/TelaSalarioXInflacao/";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Salário"
          component={TelaSalario}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="dollar" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Inflação"
          component={TelaInflacao}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="trending-up" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Salário x Inflação"
          component={TelaSalarioXInflacao}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="arrow-swap" size={20} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

import TelaInicial from "./components/TelaInical";
import TelaCatalogo from "./components/TelaCatalogo";
import TelaContato from "./components/TelaContato";

import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(64, 3, 3)",
          },

          headerTitleStyle: {
            color: "#fff",
          },

          headerTitleAlign: "center",

          tabBarInactiveTintColor: "rgb(171, 137, 125)",
          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "rgb(64, 3, 3)",
        }}
      >
        <Tabs.Screen
          name="Início"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" size={24} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

import TelaInicio from "./components/TelaInicio";
import TelaSobre from "./components/TelaSobre";
import TelaContato from "./components/TelaContato";

import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelPosition: "beside-icon",

          tabBarInactiveTintColor: "#00008b",

          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#00008b",

          headerTitleAlign: "center",

          headerTitleStyle: {
            color: "#00008b",
            fontWeight: "bold",
          },

          headerStyle: {
            backgroundColor: "#f7f7f7",
          },
        }}
      >
        <Tabs.Screen
          name="Início"
          component={TelaInicio}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="question-circle-o" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="contacts" size={24} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

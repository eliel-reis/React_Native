import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Km_Mi from "./components/Km_Mi";
import Mi_Km from "./components/Mi_Km";

import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="ruler" size={24} color={color} />
            ),
          }}
          name="Quilômetros para Milhas"
          component={Km_Mi}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="ruler-combined" size={24} color={color} />
            ),
          }}
          name="Milhas para Quilômetros"
          component={Mi_Km}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

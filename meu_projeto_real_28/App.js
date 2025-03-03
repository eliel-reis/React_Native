import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

const Tabs = createBottomTabNavigator();

import TelaXbox from "./components/TelaXbox";
import TelaPlayStation from "./components/TelaPlayStation";
import TelaNintendo from "./components/TelaNintendo";

import XIcon from "./assets/xbox.png";
import PsIcon from "./assets/ps.png";
import NtnIcon from "./assets/nintendo.png";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Xbox"
          component={TelaXbox}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={XIcon} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="PlayStation"
          component={TelaPlayStation}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={PsIcon} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="Nintendo"
          component={TelaNintendo}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={NtnIcon} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

import { View } from "react-native";
import TelaPontos from "./components/TelaPontos";

import Green from "./assets/green.jpg";
import Blue from "./assets/blue.jpg";

import styles from "./styles";

export default function App() {
  return (
    <View>
      <View style={styles.box01}>
        <TelaPontos img={Blue} />
      </View>
      <View style={styles.box02}>
        <TelaPontos img={Green} />
      </View>
    </View>
  );
}

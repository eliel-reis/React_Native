import { View, Text } from "react-native";

import styles from "./styles";

export default function TelaSobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Sobre</Text>
      <Text>Está é a segunda tela do aplicativo</Text>
    </View>
  );
}

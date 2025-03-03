import { View, Text } from "react-native";

import styles from "./styles";

export default function TelaInicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicio</Text>
      <Text>Esta é a primeira tela do aplicativo</Text>
    </View>
  );
}

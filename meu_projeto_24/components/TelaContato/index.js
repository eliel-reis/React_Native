import { View, Text } from "react-native";

import styles from "./styles";

export default function TelaContato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Contato</Text>
      <Text>Esta é a terceira tela do aplicativo</Text>
    </View>
  );
}

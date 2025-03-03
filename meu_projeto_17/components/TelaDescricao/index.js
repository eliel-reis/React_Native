import { View, Text } from "react-native";

import styles from "./styles";

export default function TelaDescricao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Voltando para a Home</Text>
      <Text style={styles.texto}>
        Toque na seta ao lado do titulo da rota para voltar para a Home.
      </Text>
    </View>
  );
}

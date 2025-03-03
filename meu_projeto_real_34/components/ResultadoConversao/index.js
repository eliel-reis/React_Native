import { View, Text } from "react-native";

import styles from "../../assets/styles/styles";

export default function ResultadoConversao(props) {
  return (
    <View style={styles.container02}>
      <Text style={styles.texto01}>{props.resultado.toFixed(2)}</Text>
      <Text style={styles.texto02}>{props.medida}</Text>
    </View>
  );
}

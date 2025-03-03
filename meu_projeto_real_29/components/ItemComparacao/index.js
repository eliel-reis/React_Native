import { View, Text } from "react-native";

import styles from "./styles";

export default function ItemComparacao(props) {
  return (
    <View
      style={{
        backgroundColor: props.color,
        flexDirection: "row",
        width: "100%",
        padding: 1,
        height: 70,
        alignItems: "center",
      }}
    >
      <Text style={styles.texto01}>{props.ano}</Text>
      <Text style={styles.texto02}>{props.salario}</Text>
      <Text style={styles.texto}>{props.inflacao}</Text>
      <Text style={styles.texto}>{props.crescSalarial}</Text>
      <Text style={styles.texto05}>{props.statusSalario}</Text>
    </View>
  );
}

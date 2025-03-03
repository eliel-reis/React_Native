import { View, Text } from "react-native";

import styles from "./styles";

export default function ItemValor(props) {
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
      <Text style={styles.texto}>{props.ano}</Text>
      <Text style={styles.texto}>{props.valor}</Text>
    </View>
  );
}

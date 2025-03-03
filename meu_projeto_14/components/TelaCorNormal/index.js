import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default function TelaCorNormal() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela com cor normal</Text>
    </View>
  );
}

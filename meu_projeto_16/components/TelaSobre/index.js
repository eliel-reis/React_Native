import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";

export default function TelaSobre(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Sobre</Text>
      <View style={styles.btn}>
        <Button
          style={styles.btn}
          title="Tela inicial"
          onPress={() => {
            props.navigation.navigate("Tela inicial");
          }}
        />
      </View>
    </View>
  );
}

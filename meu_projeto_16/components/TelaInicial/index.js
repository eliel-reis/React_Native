import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Text style={styles.texto}>
        Toque nos botões abaixo para navegar pelas rotas do aplicativo
      </Text>
      <View style={styles.btn}>
        <Button
          title="Tela sobre"
          onPress={() => {
            props.navigation.navigate("Tela sobre");
          }}
        />
      </View>
    </View>
  );
}

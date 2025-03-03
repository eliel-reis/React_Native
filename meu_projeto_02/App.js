import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Hello World</Text>
      <Text>Criado por Eliel Reis</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize: 36,
  },

  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

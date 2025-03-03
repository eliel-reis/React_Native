import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Congo from "./assets/imagens/floresta-congo.png";
import Taiga from "./assets/imagens/floresta-taiga.png";
import Amazonica from "./assets/imagens/floresta-amazonica.png";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Florestas pelo mundo</Text>

      <Image source={Congo} style={estilos.img} />
      <Text style={estilos.margem}>Floresta do congo (África)</Text>

      <Image source={Taiga} style={estilos.img} />
      <Text style={estilos.margem}>Floresta (Hemisfério Norte)</Text>

      <Image source={Amazonica} style={estilos.img} />
      <Text>Floresta Amazônica (América do Sul)</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 100,
  },

  titulo: {
    fontSize: 22,
    marginBottom: 30,
  },

  margem: {
    marginBottom: 20,
  },
});

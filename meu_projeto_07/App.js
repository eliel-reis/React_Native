import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import Lua from "./assets/lua.png";

export default function App() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.lua} source={Lua} />

      <View style={estilos.boxtext}>
        <Text style={estilos.titulo}>Lua</Text>

        <Text style={estilos.texto}>
          A Lua é o satélite natural do{" "}
          <Text style={estilos.destaque}>planeta Terra</Text>, distanciados por
          aproximadamente 384.405 km.
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 30,
  },

  lua: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },

  titulo: {
    color: "white",
    textAlign: "center",
    fontSize: 26,
    marginBottom: 20,
  },

  texto: {
    color: "white",
    textAlign: "center",
  },

  destaque: {
    fontStyle: "italic",
    fontWeight: "bold",
  },

  boxtext: {
    borderRadius: 20,
    borderWidth: 2,
    width: 300,
    borderColor: "white",
    borderStyle: "dotted",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

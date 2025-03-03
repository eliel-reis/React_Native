import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Capa from "./assets/capa.webp";
import MyFoto from "./assets/foto-eliel.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.segundo_container}>
        <Image style={styles.mycapa} source={Capa} />
      </View>
      <View style={styles.terceiro_container}>
        <Image style={styles.myfoto} source={MyFoto} />
        <Text style={styles.titulo}>Eliel Reis</Text>
        <Text style={styles.texto}>
          Tecnólogo em Análise e Desenvolvimento de Sistemas, desenvolvedor
          Full-Stack, especializado nas tecnologias React.js/Next.js,
          Node.js/Express.js, React Native.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  segundo_container: {
    flex: 1,
  },

  mycapa: {
    width: "100%",
    height: "100%",
  },

  myfoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },

  terceiro_container: {
    alignItems: "center",
    flex: 1,
  },

  titulo: {
    fontSize: 18,
  },

  texto: {
    textAlign: "center",
    marginTop: 10,
  },
});

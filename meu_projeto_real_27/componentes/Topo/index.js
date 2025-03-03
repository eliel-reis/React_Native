import React from "react";
import { View, Text, Image } from "react-native";

import churrasco from "../../assets/churrasco.png";

import styles from "./styles";

export default function Topo() {
  return (
    <View style={styles.box}>
      <Image style={styles.boxIcone} source={churrasco} />

      <View>
        <Text style={styles.boxTitulo}>Churrasco em casa</Text>
        <Text style={styles.boxSubtitulo}>Calculando a comida e a bebida</Text>
      </View>
    </View>
  );
}

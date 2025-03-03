import React from "react";
import { Image, Text, View } from "react-native";

import convidado from "../../assets/convidado.png";
import carne from "../../assets/carne.png";
import refrigerante from "../../assets/refrigerante.png";
import cerveja from "../../assets/cerveja.png";
import styles from "./styles";

export default function Cards() {
  return (
    <View style={styles.boxDados}>
      <View style={styles.boxCard}>
        <Image style={styles.boxCardIcone} source={convidado} />

        <Text style={styles.boxCardTexto}>Convidados</Text>

        <Text style={styles.boxCardValor}>1</Text>
      </View>

      <View style={styles.boxCard}>
        <Image style={styles.boxCardIcone} source={carne} />

        <Text style={styles.boxCardTexto}>Carne</Text>

        <Text style={styles.boxCardValor}>400 GR</Text>
      </View>

      <View style={styles.boxCard}>
        <Image style={styles.boxCardIcone} source={refrigerante} />

        <Text style={styles.boxCardTexto}>Refrigerante</Text>

        <Text style={styles.boxCardValor}>700 ML</Text>
      </View>

      <View style={styles.boxCard}>
        <Image style={styles.boxCardIcone} source={cerveja} />

        <Text style={styles.boxCardTexto}>Cerveja</Text>

        <Text style={styles.boxCardValor}>4 Latas</Text>
      </View>
    </View>
  );
}

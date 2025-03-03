import React from "react";
import { View, Text, Image } from "react-native";

import Img_2 from "../../assets/img/img2.png";

import styles from "./styles";

export default function Conteudo() {
  return (
    <View style={styles.containerConteudo}>
      <Text style={styles.tituloConteudo}>Os principais jogos estão aqui</Text>
      <Image style={styles.imgConteudo} source={Img_2} />
      <Text style={styles.textoConteudo}>
        A família Nintendo Switch é o lar de jogos exclusivos de séries como
        Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.
      </Text>
    </View>
  );
}

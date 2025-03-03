import React from "react";
import { Image, Text, View } from "react-native";

import Img_1 from "../../assets/img/img1.png";
import styles from "./styles";

export default function Topo() {
  return (
    <View style={styles.containerTopo}>
      <Image style={styles.imgTopo} source={Img_1} />
      <Text style={styles.tituloTopo}>Nintendo Switch</Text>
    </View>
  );
}

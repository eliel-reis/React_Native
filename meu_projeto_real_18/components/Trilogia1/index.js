import { View, Text, Image } from "react-native";

import DarthVader from "../../assets/darth-vader.jpeg";

import styles from "./styles";

export default function Trilogia1() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto01}>A história do Darth Vader</Text>

      <Image source={DarthVader} style={styles.img} />

      <Text style={styles.texto02}>
        Trilogia prequela Episódios I, II e III
      </Text>

      <Text style={styles.texto03}>
        Apesar de ter sido criado depois da trilogia original, essa é a primeira
        trilogia na ordem cronológica da série Star Wars Nela é contada a
        história do grande vilão Darth Vader.
      </Text>

      <Text style={styles.texto04}>
        Através dessa trilogia você vai saber de onde ele veio e quem ele é.
      </Text>
    </View>
  );
}

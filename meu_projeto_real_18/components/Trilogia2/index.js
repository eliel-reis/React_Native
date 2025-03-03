import { View, Text, Image } from "react-native";

import Lucas from "../../assets/lucas-skywalker.jpg";

import styles from "./styles";

export default function Trilogia1() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto01}>A história de Luke Skywalker </Text>

      <Image source={Lucas} style={styles.img} />

      <Text style={styles.texto02}>Trilogia prequela Episódios IV, V e VI</Text>

      <Text style={styles.texto03}>
        Essa foi a primeira trilogia a surgir porém sua história se passa após a
        trilogia prequeia.
      </Text>

      <Text style={styles.texto04}>
        Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de
        socorro da princesa Leiâ e assim batalhar com o grande vilão Darth
        Vader.
      </Text>
    </View>
  );
}

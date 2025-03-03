import { ScrollView, Text, Image } from "react-native";

import imgS from "../../assets/console-1.png";
import imgX from "../../assets/console-2.webp";

import styles from "./styles";

export default function TelaConsoles() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.img} source={imgS} />

      <Text style={styles.titulo}>XBOX SERIES S</Text>

      <Text style={styles.texto01}>
        Desempenho de última geração no menor Xbox de todos os tempos
      </Text>

      <Text style={styles.texto02}>
        O Series S é pra quem busca jogos de nova geração gastando pouco, é o
        console mais barato da nova geração. Ele é o equilibrio entre gráfico e
        performance.
      </Text>

      <Image style={styles.img} source={imgX} />

      <Text style={styles.titulo}>XBOX SERIES X</Text>

      <Text style={styles.texto01}>
        O Xbox mais rápido e poderoso de todos os tempos.
      </Text>

      <Text style={styles.texto02}>
        O Series X é pra quem quer poder absoluto. O console mais poderoso do
        mercado, excelência em gráficos e performance.
      </Text>
    </ScrollView>
  );
}

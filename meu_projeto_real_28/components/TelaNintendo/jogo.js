import { View, Text, Image } from "react-native";

import disc from "../../assets/jogo/disc.png";
import money from "../../assets/jogo/money.png";
import ranking from "../../assets/jogo/ranking.png";
import sales from "../../assets/jogo/sales.png";

import styles from "../../assets/styles/styles.js";

export default function Jogo() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Super Mario Bros</Text>

        <Text style={styles.texto}>
          Apesar de não estar disponível no lançamento do console, Super Mario
          Bros foi o Jogo mais vendido do NES e é uma das franquias de jogos
          mais populares até os dias de hoje.
        </Text>

        <Text style={styles.texto}>
          A franquia foi tão popular na época, que 3 jogos da série Super Mario
          ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em
          primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto
          lugar. Confira mais informações sobre o primeiro jogo da franquia
          Super Mario Bros:
        </Text>

        <View style={styles.containerCard}>
          <View style={styles.containerCard02}>
            <View style={styles.cardNtn}>
              <Image style={styles.imgCard} source={sales} />

              <Text style={styles.texto02}>40 milhões de cópias</Text>
              <Text style={styles.texto02}>Até 1994</Text>
            </View>

            <View style={styles.cardNtn}>
              <Image style={styles.imgCard} source={money} />

              <Text style={styles.texto02}>US$ 72 milhões</Text>
              <Text style={styles.texto02}>Primeiros 4 meses</Text>
            </View>
          </View>

          <View style={styles.containerCard02}>
            <View style={styles.cardNtn}>
              <Image style={styles.imgCard} source={ranking} />

              <Text style={styles.texto02}>95% de Aprovação</Text>
              <Text style={styles.texto02}>Revista CVG</Text>
            </View>

            <View style={styles.cardNtn}>
              <Image style={styles.imgCard} source={disc} />

              <Text style={styles.texto02}>Remake em 1993</Text>
              <Text style={styles.texto02}>Para o SNES</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

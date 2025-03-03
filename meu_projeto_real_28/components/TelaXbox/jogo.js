import { View, Text, Image } from "react-native";

import disc from "../../assets/jogo/disc.png";
import money from "../../assets/jogo/money.png";
import ranking from "../../assets/jogo/ranking.png";
import sales from "../../assets/jogo/sales.png";

import styles from "../../assets/styles/styles.js";

export default function Jogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>O fenômeno Halo</Text>

      <Text style={styles.texto}>
        Halo: Combat Evolved foi desenvolvido pela Bungle e Lançado para o Xbox
        no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já
        estava presente em 50% da base de consoles Xbox.
      </Text>

      <Text style={styles.texto}>
        Halo é até hoje um dos jogos mais importantes do Xbox e da indústria
        como um tudo. Confira a seguir alguns dados sobre o primeiro título da
        principal franquia do Xbox.
      </Text>

      <View style={styles.containerCard}>
        <View style={styles.containerCard02}>
          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={sales} />

            <Text style={styles.texto02}>4.7 milhões de cópias</Text>
            <Text style={styles.texto02}>Até Julho de 2006</Text>
          </View>

          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={money} />

            <Text style={styles.texto02}>US$ 170 milhões</Text>
            <Text style={styles.texto02}>Apenas nos EUA</Text>
          </View>
        </View>

        <View style={styles.containerCard02}>
          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={ranking} />

            <Text style={styles.texto02}>97% de Aprovação</Text>
            <Text style={styles.texto02}>Metacritic</Text>
          </View>

          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={disc} />

            <Text style={styles.texto02}>Remake em 2014</Text>
            <Text style={styles.texto02}>Para o Xbox One</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

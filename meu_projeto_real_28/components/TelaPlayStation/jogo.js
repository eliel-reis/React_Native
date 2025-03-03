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
        <Text style={styles.titulo}>Final Fantasy VII</Text>

        <Text style={styles.texto}>
          Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII.
          Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um
          sucesso comercial absoluto, além de ter sido muito bem recebido pelo
          público e pela critica especializada.
        </Text>

        <Text style={styles.texto}>
          Final Fantasy VII foi um lançamento muito importante para a Sony, isso
          porque semanas antes do lançamento os consoles PlayStation estavam
          esgotados por todo Japão, tamanho era o interesse dos jogadores pelo
          novo título da franquia. Alcançando marcas incríveis, como podem ser
          vistas a seguir:
        </Text>

        <View style={styles.containerCard}>
          <View style={styles.containerCard02}>
            <View style={styles.cardPs}>
              <Image style={styles.imgCard} source={sales} />

              <Text style={styles.texto02}>2 milhões de cópias</Text>
              <Text style={styles.texto02}>Em 2 dias no Japão</Text>
            </View>

            <View style={styles.cardPs}>
              <Image style={styles.imgCard} source={money} />

              <Text style={styles.texto02}>US$ 115 milhões</Text>
              <Text style={styles.texto02}>Em 2 dias no Japão</Text>
            </View>
          </View>

          <View style={styles.containerCard02}>
            <View style={styles.cardPs}>
              <Image style={styles.imgCard} source={ranking} />

              <Text style={styles.texto02}>92% de Aprovação</Text>
              <Text style={styles.texto02}>Metacritic</Text>
            </View>

            <View style={styles.cardPs}>
              <Image style={styles.imgCard} source={disc} />

              <Text style={styles.texto02}>Remake em 2020</Text>
              <Text style={styles.texto02}>Para o PS4</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

import { ScrollView, View, Text, Image } from "react-native";

import FotoCapa from "../../assets/foto-capa.jpg";
import ReiDaChuva from "../../assets/rei-de-monaco.png";
import ReiDeMonaco from "../../assets/rei-da-chuva.png";
import Silvastone from "../../assets/silvastone.png";
import Preparacao from "../../assets/preparacao.png";

import styles from "./styles";

export default function TelaSobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ayrton Senna</Text>

      <Image style={styles.fotoCapa} source={FotoCapa} />

      <Text style={styles.paragrafo01}>
        No esporte mais global e veloz do mundo, um piloto é considerado o mais
        rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam
        a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é
        mais do que isso: o brasileiro, foi o responsável por alguns do momentos
        mais mágicos da principal categoria do automobilismo mundial.
      </Text>

      <ScrollView>
        <View style={styles.card}>
          <Image style={styles.imgCard} source={ReiDaChuva} />
          <View style={styles.textosCard}>
            <Text style={styles.tituloCard}>Rei da chuva</Text>
            <Text>
              Aprimourou a pilotagem no asfalto molhado e mostrou ser um piloto
              de determinação, garra e persistência.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.imgCard} source={ReiDeMonaco} />

          <View style={styles.textosCard}>
            <Text style={styles.tituloCard}>Rei da Mônaco</Text>

            <Text>
              Conquistou o posto por ser o maior recordista de vitórias, com
              seis conquistas.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.imgCard} source={Silvastone} />

          <View style={styles.textosCard}>
            <Text style={styles.tituloCard}>Silvastone</Text>

            <Text>
              Por seu currículo impressionante em Silverstone, Ayrton recebeu o
              apelido de 'Silvastone' pela imprensa inglesa.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.imgCard} source={Preparacao} />

          <View style={styles.textosCard}>
            <Text style={styles.tituloCard}>Preparação</Text>

            <Text>
              Para vencer corridas e campeonatos o piloto precisava ter uma
              preparação física de atleta.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

import { View, Text, Image } from "react-native";

import cpu from "../../assets/especificacoes/cpu.png";
import gpu from "../../assets/especificacoes/gpu.png";
import hdd from "../../assets/especificacoes/hdd.png";
import ram from "../../assets/especificacoes/ram.png";

import styles from "../../assets/styles/styles";

export default function Especificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Especificações Técnicas</Text>

      <Text style={styles.texto}>
        Confira a seguir as especificações técnicas do NES, lançado em 1983.
      </Text>

      <View style={styles.containerCard}>
        <View style={styles.containerCard02}>
          <View style={styles.cardNtn}>
            <Image style={styles.imgCard} source={cpu} />

            <Text style={styles.texto02}>Ricoh 2A03</Text>
            <Text style={styles.texto02}>Processador 8-bit</Text>
          </View>

          <View style={styles.cardNtn}>
            <Image style={styles.imgCard} source={gpu} />

            <Text style={styles.texto02}>52 Cores</Text>
            <Text style={styles.texto02}>256 x 240</Text>
          </View>
        </View>

        <View style={styles.containerCard02}>
          <View style={styles.cardNtn}>
            <Image style={styles.imgCard} source={ram} />

            <Text style={styles.texto02}>2KB RAM</Text>
            <Text style={styles.texto02}>Memória</Text>
          </View>

          <View style={styles.cardNtn}>
            <Image style={styles.imgCard} source={hdd} />

            <Text style={styles.texto02}>Cartucho</Text>
            <Text style={styles.texto02}>Proprietário</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

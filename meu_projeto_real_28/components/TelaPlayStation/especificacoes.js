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
        Confira a seguir as especificações técnicas do PlayStation, lançado em
        1994.
      </Text>

      <View style={styles.containerCard}>
        <View style={styles.containerCard02}>
          <View style={styles.cardPs}>
            <Image style={styles.imgCard} source={cpu} />

            <Text style={styles.texto02}>Sony CXD8530BQ</Text>
            <Text style={styles.texto02}>33.8688 MHz</Text>
          </View>

          <View style={styles.cardPs}>
            <Image style={styles.imgCard} source={gpu} />

            <Text style={styles.texto02}>Sony CXD8514Q</Text>
            <Text style={styles.texto02}>1MB VRAM</Text>
          </View>
        </View>

        <View style={styles.containerCard02}>
          <View style={styles.cardPs}>
            <Image style={styles.imgCard} source={ram} />

            <Text style={styles.texto02}>2 MB EDO DRAM</Text>
            <Text style={styles.texto02}>33 MHz</Text>
          </View>

          <View style={styles.cardPs}>
            <Image style={styles.imgCard} source={hdd} />

            <Text style={styles.texto02}>Drive de CD-ROM</Text>
            <Text style={styles.texto02}>660 MB / disco</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

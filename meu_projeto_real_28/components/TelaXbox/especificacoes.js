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
        Confira a seguir as especificações técnicas do Xbox de 2001.
      </Text>

      <View style={styles.containerCard}>
        <View style={styles.containerCard02}>
          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={cpu} />

            <Text style={styles.texto02}>Intel Pentium 3</Text>
            <Text style={styles.texto02}>733MHz</Text>
          </View>

          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={gpu} />

            <Text style={styles.texto02}>nVidia NV2A</Text>
            <Text style={styles.texto02}>233MHz</Text>
          </View>
        </View>

        <View style={styles.containerCard02}>
          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={ram} />

            <Text style={styles.texto02}>64 MB DDR SDRAM</Text>
            <Text style={styles.texto02}>200MHz</Text>
          </View>

          <View style={styles.cardX}>
            <Image style={styles.imgCard} source={hdd} />

            <Text style={styles.texto02}>HD 8GB</Text>
            <Text style={styles.texto02}>5400 RPM</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

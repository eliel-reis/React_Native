import { View, Text, Image } from "react-native";

import Passeio01 from "../../assets/passeios/passeio01.png";
import Passeio02 from "../../assets/passeios/passeio02.png";
import Passeio03 from "../../assets/passeios/passeio03.png";

import styles from "./styles";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Passeios em Paraty</Text>

      <Text style={styles.texto01}>
        O município de Paraty está quase inteiro em área de parques e de
        preservação ambiental. Muitas são as opções de passeios para quem curte
        a natureza: passeios de jeep, de bike, caminhadas por trilhas entre
        outros. Veja dois exemplos:
      </Text>

      <View style={styles.card}>
        <Text style={styles.titulo02}>Tirolesa</Text>

        <Image style={styles.img} source={Passeio01} />
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo02}>Rafting</Text>

        <Image style={styles.img} source={Passeio02} />
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo02}>Canoagem no mangue</Text>

        <Image style={styles.img} source={Passeio03} />
      </View>
    </View>
  );
}

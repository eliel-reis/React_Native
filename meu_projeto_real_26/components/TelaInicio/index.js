import { ImageBackground, View, Text, Image } from "react-native";

import Fundo from "../../assets/fundo.jpg";
import FotoCapa from "../../assets/foto-capa.jpg";

import styles from "./styles";

export default function TelaInicio() {
  return (
    <ImageBackground source={Fundo} style={styles.container} blurRadius={3}>
      <Image style={styles.imgPerfil} source={FotoCapa} />

      <View style={styles.card}>
        <Text style={styles.titulo}>Ayrton Senna</Text>

        <Text style={styles.paragrafo}>
          Através desse APP, você vai conhecer um pouco sobre quem foi esse
          grande piloto.
        </Text>
      </View>
    </ImageBackground>
  );
}

import { Text, ImageBackground } from "react-native";

import capa from "../../assets/capa.jpg";

import styles from "./styles";

export default function TelaInicial() {
  return (
    <ImageBackground source={capa} blurRadius={7} style={styles.backImg}>
      <Text style={styles.titulo}>Adega Preferida</Text>
      <Text style={styles.paragrafo}>
        Aqui você encontra os melhores e mais saborosos vinhos.
      </Text>
    </ImageBackground>
  );
}

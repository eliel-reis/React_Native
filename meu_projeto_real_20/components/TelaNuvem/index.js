import { View, Text, ImageBackground, Image } from "react-native";

import fundoImg from "../../assets/fundo-xcloud.png";

import xCloud2 from "../../assets/xcloud-2.png";

import styles from "./styles";

export default function TelaNuvem() {
  return (
    <ImageBackground style={styles.container} source={fundoImg}>
      <Text style={styles.titulo}>Xbox Cloud Gaming</Text>

      <Text style={styles.descricao}>Serviço de streaming de jogos</Text>

      <Text style={styles.paragrafo}>
        Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo
        favorito.
      </Text>

      <Text style={styles.paragrafo}>
        Desktop, Notebook, console ou até mesmo celular pdoe se tornar um XBOX.
      </Text>

      <Text style={styles.paragrafo}>
        Através de uma assinatura você terá um XBOX virtual sempre que precisar.
      </Text>

      <Image style={styles.img} source={xCloud2} />
    </ImageBackground>
  );
}

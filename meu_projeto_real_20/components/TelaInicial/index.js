import { View, Text, Image, Pressable } from "react-native";

import imgFundo from "../../assets/logo.png";
import imgConsole from "../../assets/console-1.png";
import imgJogo from "../../assets/jogo-1.png";
import imgXcloud from "../../assets/xcloud-1.png";

import styles from "./styles";

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={imgFundo} />

      <Text style={styles.titulo}>Xbox</Text>

      <Text style={styles.texto01}>
        Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para
        conhecer.
      </Text>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate("Consoles");
        }}
      >
        <Image style={styles.imgBtn} source={imgConsole} />
        <Text style={styles.textoBtn}>Conheça os consoles</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate("Jogos");
        }}
      >
        <Image style={styles.imgBtn} source={imgJogo} />
        <Text style={styles.textoBtn}>Conheça os jogos</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate("Nuvem");
        }}
      >
        <Image style={styles.imgBtn} source={imgXcloud} />
        <Text style={styles.textoBtn}>Conheça o xCloud</Text>
      </Pressable>
    </View>
  );
}

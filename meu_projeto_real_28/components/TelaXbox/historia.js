import { View, Text, Image } from "react-native";

import consoleXbox from "../../assets/historia/console-xbox.png";

import styles from "../../assets/styles/styles";

export default function Historia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>História do Xbox</Text>

      <Image style={styles.img} source={consoleXbox} />

      <Text style={styles.texto}>
        A Microsoft começou sua história com o público gamer em 2001, com o
        lançamento do Xbox. Lançado na época para concorrer com o PS2 da Sony e
        o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso que o
        dos seus concorrentes. E para mostrar a capacidade desse novo console
        super poderoso a Microsoft precisava de um jogo que usasse todo esse
        potencial, e foi aí que surgiu Halo, que fez um enorme sucesso atingindo
        uma imensa base de fãs, principalmente nos Estados Unidos.
      </Text>
    </View>
  );
}

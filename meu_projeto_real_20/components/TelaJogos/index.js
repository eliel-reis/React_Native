import { ScrollView, Text, ImageBackground, View } from "react-native";

import jogo2 from "../../assets/jogo-2.png";
import jogo3 from "../../assets/jogo-3.png";
import jogo4 from "../../assets/jogo-4.png";

import styles from "./styles";

export default function TelaJogos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Jogos em 4k</Text>

      <Text style={styles.texto01}>
        Os principais jogos estão aqui. Veja abaixo três exemplos de grande
        sucesso.
      </Text>

      <View style={styles.card}>
        <ImageBackground style={styles.img} source={jogo3}>
          <View style={styles.backTexto}>
            <Text style={styles.titulo02}>Forza Horizon 5</Text>
          </View>
        </ImageBackground>

        <Text style={styles.texto02}>
          Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza
          Horizon e o décimo segundo título principal da franquia Forza. O jogo
          se passa em uma representação ficcional do México.
        </Text>
      </View>

      <View style={styles.card}>
        <ImageBackground style={styles.img} source={jogo2}>
          <View style={styles.backTexto}>
            <Text style={styles.titulo02}>Cyberpunk 2077</Text>
          </View>
        </ImageBackground>
        <Text style={styles.texto02}>
          Cyberpunk 2077 é um jogo eletrônico de rpg de ação desenvolvido e
          publicado pela CD Projekt.
        </Text>
      </View>

      <View style={styles.card}>
        <ImageBackground style={styles.img} source={jogo4}>
          <View style={styles.backTexto}>
            <Text style={styles.titulo02}>Halo 5: Guardians</Text>
          </View>
        </ImageBackground>

        <Text style={styles.texto02}>
          Halo 5: Guardians é um jogo de tiro em primeira pessoa, parte da
          franquia Halo e sequência de Halo 4.
        </Text>
      </View>
    </ScrollView>
  );
}

import { ImageBackground, ScrollView, View, Text, Image } from "react-native";

import corrida01 from "../../assets/corrida1.jpg";
import vitoria01 from "../../assets/vitoria1.jpg";
import vitoria02 from "../../assets/vitoria2.jpg";
import vitoria03 from "../../assets/vitoria3.jpg";

import { FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

export default function TelaVitorias() {
  return (
    <ScrollView>
      <ImageBackground
        blurRadius={5}
        source={corrida01}
        style={styles.container}
      >
        <View style={styles.card01}>
          <Text style={styles.tituloCard01}>Senna em Números</Text>

          <Text style={styles.paragrafo01Card01}>
            Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e
            ganhou 41 Grandes Prêmios e 65 pole positions.
          </Text>

          <View style={styles.card02}>
            <FontAwesome5 name="trophy" size={25} color="#ceb105" />
            <Text style={styles.paragrafoCard02}>161</Text>
            <Text style={styles.paragrafo02Card02}>GPS DISPUTADOS</Text>
          </View>

          <View style={styles.card02}>
            <FontAwesome5 name="trophy" size={25} color="#ceb105" />
            <Text style={styles.paragrafoCard02}>65</Text>
            <Text style={styles.paragrafo02Card02}>POLE POSITIONS</Text>
          </View>

          <View style={styles.card02}>
            <FontAwesome5 name="trophy" size={25} color="#ceb105" />
            <Text style={styles.paragrafoCard02}>41</Text>
            <Text style={styles.paragrafo02Card02}>VITÓRIAS</Text>
          </View>

          <View style={styles.card02}>
            <FontAwesome5 name="trophy" size={25} color="#ceb105" />
            <Text style={styles.paragrafoCard02}>3X</Text>
            <Text style={styles.paragrafo02Card02}>CAMPEÃO MUNDIAL</Text>
          </View>
        </View>

        <View style={styles.card03}>
          <Text style={styles.tituloCard03}>Campeonato Mundial - 1988</Text>
          <Image style={styles.imgCard03} source={vitoria01} />
        </View>

        <View style={styles.card03}>
          <Text style={styles.tituloCard03}>Campeonato Mundial - 1990</Text>
          <Image style={styles.imgCard03} source={vitoria02} />
        </View>

        <View style={styles.card03}>
          <Text style={styles.tituloCard03}>Campeonato Mundial - 1991</Text>
          <Image style={styles.imgCard03} source={vitoria03} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

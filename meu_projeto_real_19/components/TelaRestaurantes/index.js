import { View, Text, Image } from "react-native";

import Restaurante01 from "../../assets/restaurantes/restaurante01.png";
import Restaurante02 from "../../assets/restaurantes/restaurante02.png";
import Restaurante03 from "../../assets/restaurantes/restaurante03.png";

import styles from "./styles";

export default function TelaRestaurantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo01}>Bares e Restaurantes</Text>

      <Text style={styles.texto01}>
        O prazer da boa comida você encontra em Paraty. Com inúmeras operções de
        restaurantes, a cidade oferece o melhor da culinária internacional,
        juntamente à saborosa cozinha caiçara. Confira alguns bares e
        restaurantes famosos.
      </Text>

      <View style={styles.img_container}>
        <Image style={styles.img} source={Restaurante01} />

        <Text style={styles.titulo}>Armazén Mar</Text>

        <Text>Localização: Rod Rio-Santos</Text>
      </View>

      <View style={styles.img_container}>
        <Image style={styles.img} source={Restaurante02} />

        <Text style={styles.titulo}>Bendita's Restaurante</Text>

        <Text>Localização: Centro Histórico</Text>
      </View>

      <View style={styles.img_container}>
        <Image style={styles.img} source={Restaurante03} />

        <Text style={styles.titulo}>SEREIA DO MAR PIZZA-BAR</Text>

        <Text>Localização: Praia do Jabaquara</Text>
      </View>
    </View>
  );
}

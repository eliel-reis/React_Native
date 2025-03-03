import { ScrollView, View, Text } from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import styles from "./styles";

export default function TelaContato() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Entre em contato conosco para comprar nossos produtos
      </Text>

      <View style={styles.card}>
        <FontAwesome name="phone" size={40} color="rgb(64, 3, 3)" />
        <Text style={styles.cardTitulo}>Telefone:</Text>
        <Text>+55 21 000000000</Text>
      </View>

      <View style={styles.card}>
        <Entypo name="location-pin" size={40} color="rgb(64, 3, 3)" />
        <Text style={styles.cardTitulo}>Endereço:</Text>
        <Text>Av.123,222 - Rio de Janeiro RJ</Text>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="email" size={40} color="rgb(64, 3, 3)" />
        <Text style={styles.cardTitulo}>Email:</Text>
        <Text>preferida@adega.com.br</Text>
      </View>

      <View style={styles.card}>
        <AntDesign name="instagram" size={40} color="rgb(64, 3, 3)" />
        <Text style={styles.cardTitulo}>Intagram:</Text>
        <Text>@adegapreferida</Text>
      </View>
    </ScrollView>
  );
}

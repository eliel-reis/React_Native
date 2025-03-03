import { View, Text, Image, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Img01 from "../../assets/01.png";

import styles from "./styles";

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.titulo}>Paraty</Text>

        <Text style={styles.texto01}>Saiba o que visitar em paraty.</Text>

        <Image source={Img01} style={styles.img} />

        <View style={styles.btn_container}>
          <Button
            title="VER RESTAURANTES"
            onPress={() => {
              props.navigation.navigate("Restaurantes");
            }}
            color="#372d00"
          />

          <Button
            title="VER PASSEIOS"
            onPress={() => {
              props.navigation.navigate("Passeios");
            }}
            color="#372d00"
          />

          <Button
            title="VER HOSPEDAGEM"
            onPress={() => {
              props.navigation.navigate("Hospedagem");
            }}
            color="#372d00"
          />
        </View>
      </View>
    </View>
  );
}

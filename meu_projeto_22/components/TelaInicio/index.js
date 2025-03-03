import { View, Text } from "react-native";

import { Entypo, FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Entypo name="home" size={24} color="black" />
      <Text>Está é a primeira tela do aplicativo</Text>
      <FontAwesome name="user" size={24} color="black" />

      <Text>User:</Text>
    </View>
  );
}

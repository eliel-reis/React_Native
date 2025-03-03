import { View, Text, Image } from "react-native";

import Logo from "../../assets/logo.jpg";

import styles from "./styles";

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      <Image source={Logo} />

      <Text style={styles.texto01}>
        Você sabe qual é a ordem cronológica da franquia Star Wars?
      </Text>

      <Text style={styles.texto02}>
        Os principais filmes da franquia estão divididos em trilogias. Clique no
        botão a seguir para conferir.
      </Text>

      <View style={styles.container_btn}>
        <Text
          style={styles.btn}
          onTouchEnd={() => {
            props.navigation.navigate("Trilogia 1");
          }}
        >
          VER 1ª TRILOGIA
        </Text>
        <Text
          style={styles.btn}
          onTouchEnd={() => {
            props.navigation.navigate("Trilogia 2");
          }}
        >
          VER 2ª TRILOGIA
        </Text>
        <Text
          style={styles.btn}
          onTouchEnd={() => {
            props.navigation.navigate("Trilogia 3");
          }}
        >
          VER 3ª TRILOGIA
        </Text>
      </View>
    </View>
  );
}

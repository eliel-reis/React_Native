import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

export default function TelaPontos(props) {
  const [contador, setContador] = useState(20);

  const remover = () => {
    let novoNumero = contador;
    novoNumero--;
    setContador(novoNumero);
  };

  const adicionar = () => {
    let novoNumero = contador;
    novoNumero++;
    setContador(novoNumero);
  };

  const renovar = () => {
    setContador(20);
  };

  return (
    <ImageBackground
      blurRadius={30}
      source={props.img}
      style={styles.background}
    >
      <View style={styles.subContainer}>
        <View onTouchEnd={remover}>
          <AntDesign name="minuscircleo" size={30} color="#fff" />
        </View>
        <Text style={styles.texto}>{contador}</Text>
        <View onTouchEnd={adicionar}>
          <AntDesign name="pluscircleo" size={30} color="#fff" />
        </View>
      </View>
      <View style={styles.iconeSingle}>
        <View onTouchEnd={renovar}>
          <SimpleLineIcons name="reload" size={30} color="#fff" />
        </View>
      </View>
    </ImageBackground>
  );
}

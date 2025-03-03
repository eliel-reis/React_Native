import { useState, useEffect } from "react";
import { ImageBackground } from "react-native";

import Background from "../../assets/background.jpg";

import styles from "./styles";

import InputConversao from "../InputConversao";
import ResultadoConversao from "../ResultadoConversao";

export default function Km_Mi() {
  const [number, setNumber] = useState(0);
  const [resultado, setResultado] = useState(0);

  const converteKmParaMi = () => {
    let Milhas = number / 1.6;
    setResultado(Milhas);
  };

  useEffect(() => {
    converteKmParaMi();
  }, [number]);

  return (
    <ImageBackground
      style={styles.imgFundo}
      blurRadius={150}
      source={Background}
    >
      <InputConversao
        titulo="Conversor de quilômetros para milhas"
        medida="Quilômetros"
        number={number.toString()}
        setNumber={setNumber}
      />
      <ResultadoConversao medida="Milhas" resultado={resultado} />
    </ImageBackground>
  );
}

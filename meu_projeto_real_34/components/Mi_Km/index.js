import { ImageBackground } from "react-native";

import BackgroundB from "../../assets/background_b.jpeg";

import styles from "./styles";

import InputConversao from "../InputConversao";
import ResultadoConversao from "../ResultadoConversao";
import { useState, useEffect } from "react";

export default function Mi_Km() {
  const [number, setNumber] = useState(0);
  const [resultado, setResultado] = useState(0);

  const converteMiParaKm = () => {
    let Km = number * 1.6;

    setResultado(Km);
  };

  useEffect(() => {
    converteMiParaKm();
  }, [number]);

  return (
    <ImageBackground
      blurRadius={150}
      style={styles.imgFundo}
      source={BackgroundB}
    >
      <InputConversao
        titulo="Conversor de milhas para quilômetros"
        medida="Milhas"
        number={number.toString()}
        setNumber={setNumber}
      />
      <ResultadoConversao medida="Quilômetros" resultado={resultado} />
    </ImageBackground>
  );
}

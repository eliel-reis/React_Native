import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import estilo from "./estilo";

const TelaInicial = () => {
  const [numeroSorteado, setNumeroSorteado] = useState(0);

  const [flagInputFocus, setFlagInputFocus] = useState("");

  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(10);

  const validarCampos = (minimo, maximo) => {
    if (isNaN(minimo) || isNaN(maximo)) {
      alert("Digite os valores");
      return false;
    }

    if (minimo > maximo) {
      alert("O valor mínimo deve ser meno que o valor máximo");
      return false;
    }

    return true;
  };

  const gerarNumero = () => {
    const min = parseInt(valorMinimo);
    const max = parseInt(valorMaximo);

    if (!validarCampos(min, max)) {
      return;
    }

    const novoNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    setNumeroSorteado(novoNumber);
  };

  return (
    <View style={estilo.tela}>
      <Text style={estilo.titulo}>
        Escolha os valores mínimo e máximo para fazer o sorteio
      </Text>

      <View style={estilo.linhaInput}>
        <Text>Valor Mínimo: </Text>

        <TextInput
          textAlign="center"
          keyboardType="number-pad"
          maxLength={5}
          autoFocus={true}
          style={
            flagInputFocus === "txt_min"
              ? estilo.inputFocus
              : estilo.inputNormal
          }
          onFocus={() => setFlagInputFocus("txt_min")}
          onBlur={() => setFlagInputFocus("")}
          value={valorMinimo.toString()}
          onChangeText={(valor) => setValorMinimo(valor)}
        />
      </View>

      <View style={estilo.linhaInput}>
        <Text>Valor Máximo: </Text>

        <TextInput
          textAlign="center"
          keyboardType="number-pad"
          maxLength={5}
          style={
            flagInputFocus === "txt_max"
              ? estilo.inputFocus
              : estilo.inputNormal
          }
          onFocus={() => setFlagInputFocus("txt_max")}
          onBlur={() => setFlagInputFocus("")}
          value={valorMaximo.toString()}
          onChangeText={(valor) => setValorMaximo(valor)}
        />
      </View>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>{numeroSorteado}</Text>
      </View>

      <View style={estilo.boxBotao}>
        <Button title="Sortear" onPress={gerarNumero} color="#1f4f66" />
      </View>
    </View>
  );
};

export default TelaInicial;

<TextInput textAlign="left" />;

import { ScrollView } from "react-native";

import Historia from "./historia";
import Especificacoes from "./especificacoes";
import Jogo from "./jogo";
import Conclusao from "./conclusao";

export default function TelaPlayStation() {
  return (
    <ScrollView>
      <Historia />
      <Especificacoes />
      <Jogo />
      <Conclusao />
    </ScrollView>
  );
}

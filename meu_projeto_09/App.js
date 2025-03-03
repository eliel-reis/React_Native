import React from "react";
import { View } from "react-native";

import Topo from "./components/Topo";
import Conteudo from "./components/Conteudo";

export default function App() {
  return (
    <View>
      <Topo />
      <Conteudo />
    </View>
  );
}

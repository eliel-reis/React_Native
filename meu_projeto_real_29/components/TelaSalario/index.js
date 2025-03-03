import { View, Text, ScrollView } from "react-native";

import ItemValor from "../ItemValor/index";
import styles from "../ItemValor/styles";

export default function TelaSalario() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.boxCinza}>
        <Text style={styles.texto}>Ano</Text>
        <Text style={styles.texto}>Salário</Text>
      </View>

      <ScrollView>
        <ItemValor color="white" ano="2010" valor="R$ 510,00" />
        <ItemValor color="rgb(196, 196, 196)" ano="2011" valor="R$ 545,00" />
        <ItemValor color="white" ano="2012" valor="R$ 622,00" />
        <ItemValor color="rgb(196, 196, 196)" ano="2013" valor="R$ 678,00" />
        <ItemValor color="white" ano="2014" valor="R$ 724,00" />
        <ItemValor color="rgb(196, 196, 196)" ano="2015" valor="R$ 788,00" />
        <ItemValor color="white" ano="2016" valor="R$ 880,00" />
        <ItemValor color="rgb(196, 196, 196)" ano="2017" valor="R$ 937,00" />
        <ItemValor color="white" ano="2018" valor="R$ 954,00" />
        <ItemValor color="rgb(196, 196, 196)" ano="2019" valor="R$ 998,00" />
        <ItemValor color="white" ano="2020" valor="R$ 1045,00" />
      </ScrollView>
    </View>
  );
}

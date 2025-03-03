import { View, Text, ScrollView } from "react-native";

import ItemValor from "../ItemValor/index";
import styles from "../ItemValor/styles";

export default function TelaInflacao() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.boxCinza}>
        <Text style={styles.texto}>Ano</Text>
        <Text style={styles.texto}>Inflação</Text>
      </View>

      <ScrollView>
        <ItemValor color="white" ano="2010" valor="5,91%" />
        <ItemValor color="rgb(196, 196, 196)" ano="2011" valor="6,50%" />
        <ItemValor color="white" ano="2012" valor="5,84%" />
        <ItemValor color="rgb(196, 196, 196)" ano="2013" valor="5,91%" />
        <ItemValor color="white" ano="2014" valor="6,41%" />
        <ItemValor color="rgb(196, 196, 196)" ano="2015" valor="10,67%" />
        <ItemValor color="white" ano="2016" valor="6,29%" />
        <ItemValor color="rgb(196, 196, 196)" ano="2017" valor="2,95%" />
        <ItemValor color="white" ano="2018" valor="3,75%" />
        <ItemValor color="rgb(196, 196, 196)" ano="2019" valor="4,31%" />
        <ItemValor color="white" ano="2020" valor="4,52%" />
      </ScrollView>
    </View>
  );
}

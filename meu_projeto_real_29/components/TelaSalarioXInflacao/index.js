import { View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import ItemComparacao from "../ItemComparacao/index";
import styles from "./styles";

export default function TelaSalarioXInflacao() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.boxCinza}>
        <Text style={styles.texto01}>Ano</Text>
        <Text style={styles.texto02}>Salário</Text>
        <Text style={styles.texto}>Inflação</Text>
        <Text style={styles.texto}>Cresc. Salarial</Text>
        <Text style={styles.texto05}>Status Salário</Text>
      </View>

      <ScrollView>
        <ItemComparacao
          color="white"
          ano="2010"
          salario="R$ 510,00"
          inflacao="5,91%"
          crescSalarial="-"
        />
        <ItemComparacao
          color="rgb(196, 196, 196)"
          ano="2011"
          salario="R$ 545,00"
          inflacao="6,50%"
          crescSalarial="6,86%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
        <ItemComparacao
          color="white"
          ano="2012"
          salario="R$ 622,00"
          inflacao="5,84%"
          crescSalarial="14,13%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
        <ItemComparacao
          color="rgb(196, 196, 196)"
          ano="2013"
          salario="R$ 678,00"
          inflacao="5,91%"
          crescSalarial="9,00%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
        <ItemComparacao
          color="white"
          ano="2014"
          salario="R$ 724,00"
          inflacao="6,41%"
          crescSalarial="6,78%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
        <ItemComparacao
          color="rgb(196, 196, 196)"
          ano="2015"
          salario="R$ 788,00"
          inflacao="10,67%"
          crescSalarial="8,84%"
          statusSalario={<AntDesign name="arrowdown" size={24} color="red" />}
        />
        <ItemComparacao
          color="white"
          ano="2016"
          salario="R$ 880,00"
          inflacao="6,29%"
          crescSalarial="11,68%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
        <ItemComparacao
          color="rgb(196, 196, 196)"
          ano="2017"
          salario="R$ 937,00"
          inflacao="2,95%"
          crescSalarial="6,48%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
        <ItemComparacao
          color="white"
          ano="2018"
          salario="R$ 954,00"
          inflacao="3,75"
          crescSalarial="1,81%"
          statusSalario={<AntDesign name="arrowdown" size={24} color="red" />}
        />
        <ItemComparacao
          color="rgb(196, 196, 196)"
          ano="2019"
          salario="R$ 998,00"
          inflacao="4,31%"
          crescSalarial="4,61%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
        <ItemComparacao
          color="white"
          ano="2020"
          salario="R$ 1045,00"
          inflacao="4,52%"
          crescSalarial="4,71%"
          statusSalario={<AntDesign name="arrowup" size={24} color="green" />}
        />
      </ScrollView>
    </View>
  );
}

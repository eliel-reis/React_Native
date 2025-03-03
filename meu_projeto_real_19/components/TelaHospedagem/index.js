import { View, Text, Image } from "react-native";

import Hospedagem01 from "../../assets/hospedagens/hospedagem01.png";
import Hospedagem02 from "../../assets/hospedagens/hospedagem02.png";
import Hospedagem03 from "../../assets/hospedagens/hospedagem03.png";

import styles from "./styles";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pousadas e Hotéis em Paraty</Text>

      <Text style={styles.descricao}>
        Paraty conta com excelentes hoteis e pousadas cujos preços podem variar
        de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.
      </Text>

      <View style={styles.card}>
        <Image style={styles.img} source={Hospedagem01} />

        <Text style={styles.titulo_card}>Pousada Missanga</Text>

        <Text>Valor médio: R$ 350,00</Text>
        <Text>Localização: Próx. à AV. Roberto Silveira</Text>
      </View>

      <View style={styles.card}>
        <Image style={styles.img} source={Hospedagem02} />

        <Text style={styles.titulo_card}>Pousada Morro do Forte</Text>

        <Text>Valor médio: R$ 450,00</Text>
        <Text>Localização: Próximo à Praia - Pontal</Text>
      </View>

      <View style={styles.card}>
        <Image style={styles.img} source={Hospedagem03} />

        <Text style={styles.titulo_card}>Pousada Porto Imperial</Text>

        <Text>Valor médio: R$ 550,00</Text>
        <Text>Localização: Centro Hisórico</Text>
      </View>
    </View>
  );
}

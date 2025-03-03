import { ScrollView, View, Text, Image } from "react-native";

import vinhoBranco from "../../assets/vinho-branco.jpg";
import vinhoEspecial from "../../assets/vinho-especial.jpg";
import vinhoRose from "../../assets/vinho-rose.jpg";
import vinhoSeco from "../../assets/vinho-seco.jpg";

import styles from "./styles";

export default function TelaCatalogo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Nossos vinhos</Text>

      <Text style={styles.p}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho
        rosé, vinho tinto e vinho seco.
      </Text>

      <View style={styles.card}>
        <View style={styles.cardImg}>
          <Image style={styles.img} source={vinhoBranco} />
        </View>
        <View style={styles.containerParagrafo}>
          <Text style={styles.cardTitulo}>Chatigny Chardonnay</Text>

          <Text style={styles.cardP}>
            Vinho leve, refrescante e levemente citrico da cor amarelo palha.
            Perfeito com carnes brancas e massa ao ponto.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardImg}>
          <Image style={styles.img} source={vinhoRose} />
        </View>
        <View style={styles.containerParagrafo}>
          <Text style={styles.cardTitulo}>Concha y Toro Exportacion</Text>

          <Text style={styles.cardP}>
            Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com
            saladas e aperitivos.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardImg}>
          <Image style={styles.img1} source={vinhoSeco} />
        </View>
        <View style={styles.containerParagrafo}>
          <Text style={styles.cardTitulo}>Portada Winemaker's</Text>

          <Text style={styles.cardP}>
            Vinho enorpado, saboroso e frutado, com final levemente adocicado.
            Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes
            assadas ou grelhadas.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardImg}>
          <Image style={styles.img} source={vinhoEspecial} />
        </View>
        <View style={styles.containerParagrafo}>
          <Text style={styles.cardTitulo}>Elvio Cogno Ravera Barolo</Text>

          <Text style={styles.cardP}>
            Vinho estruturado, com sabor de cereja vermelha madura, framboesa,
            notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é
            perfeito com as carnes vermelhas e molhos encorpados.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

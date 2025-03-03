import { View, Text, Image } from "react-native";

import Sith from "../../assets/sith.jpg";

import styles from "./styles";

export default function Trilogia1() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto01}>A história de Rey</Text>

      <Image source={Sith} style={styles.img} />

      <Text style={styles.texto02}>
        Trilogia prequela Episódios VII, VIII e IX
      </Text>

      <Text style={styles.texto03}>
        Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de
        sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo
        e Chewbacca para procurar a única esperança de restaurar a paz da
        galáxia.
      </Text>
    </View>
  );
}

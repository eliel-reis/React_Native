import { View, Text } from "react-native";

import styles from "../../assets/styles/styles.js";

export default function Conclusao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conclusão</Text>

      <Text style={styles.texto}>
        A Sony construiu com o PlayStation algo que para muita gente era
        impensável, não apenas por mostrar que era possível construir um produto
        barato e de qualidade, mas também por ter conseguido vencer uma das
        líderes de mercado na época de seu Lançamento na briga pela fidelidade
        dos consumidores.
      </Text>
    </View>
  );
}

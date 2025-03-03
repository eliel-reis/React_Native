import { View, Text, Button } from "react-native";

import styles from "./styles";

export default function TelaHome(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Stack Navigation</Text>
      <Text style={styles.texto}>
        Toque no botão abaixo para navegar para a rota descrição
      </Text>

      <View style={styles.btn}>
        <Button
          title="Tela Descrição"
          onPress={() => {
            props.navigation.navigate("Tela Descrição");
          }}
        />
      </View>
    </View>
  );
}

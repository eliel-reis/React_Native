import { View, Text, TextInput } from "react-native";

import styles from "../../assets/styles/styles";

export default function InputConversao(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <View style={styles.linhaInput}>
        <Text style={styles.label}>{props.medida}</Text>
        <TextInput
          style={styles.input}
          value={props.number}
          keyboardType="numeric"
          maxLength={5}
          onChangeText={(medida) => {
            props.setNumber(medida);
          }}
        />
      </View>
    </View>
  );
}

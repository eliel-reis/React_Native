import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 180,
    borderRadius: 5,
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  titulo: {
    color: "#127812",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 150,
    marginBottom: 10,
  },

  descricao: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#a6a8ad",
    marginBottom: 20,
  },

  paragrafo: {
    color: "#a6a8ad",
    textAlign: "center",
    width: 350,
    marginBottom: 15,
  },
});

export default styles;

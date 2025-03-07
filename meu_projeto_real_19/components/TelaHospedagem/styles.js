import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 50,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#beceff",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  descricao: {
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    width: 320,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: "#979797",
    borderWidth: 1,
  },

  titulo_card: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default styles;

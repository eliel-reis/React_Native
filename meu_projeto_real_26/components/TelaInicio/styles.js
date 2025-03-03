import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },

  imgPerfil: {
    borderWidth: 3,
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  card: {
    backgroundColor: "black",
    width: "80%",
    height: 130,
    borderRadius: 20,
    gap: 20,
    padding: 20,
  },

  titulo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 23,
    textAlign: "center",
  },

  paragrafo: {
    color: "#fff",
  },
});

export default styles;

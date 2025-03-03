import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  fotoCapa: {
    borderRadius: 5,
    height: 200,
    width: "100%",
    marginBottom: 10,
  },

  paragrafo01: {
    color: "#757575",
    fontWeight: "bold",
    marginBottom: 20,
  },

  imgCard: {
    width: 100,
    height: 100,
  },

  card: {
    flexDirection: "row",
    marginBottom: 20,
    borderTopColor: "#d5d5d5",
    borderBottomColor: "#d5d5d5",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  textosCard: {
    padding: 10,
    flex: 1,
  },

  tituloCard: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;

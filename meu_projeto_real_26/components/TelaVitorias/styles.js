import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  card01: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    width: 340,
    marginBottom: 50,
  },

  tituloCard01: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  card02: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  paragrafoCard02: {
    color: "#eecb01",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 5,
  },

  paragrafo02Card02: {
    color: "#a6a6a6",
    fontSize: 16,
  },

  paragrafo01Card01: {
    color: "#a6a6a6",
    marginVertical: 30,
    textAlign: "center",
  },

  card03: {
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 20,
  },

  tituloCard03: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    padding: 15,
  },

  imgCard03: {
    height: 200,
    width: 300,
  },
});

export default styles;

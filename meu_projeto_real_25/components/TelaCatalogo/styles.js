import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  cardImg: {
    marginLeft: 20,
    marginTop: 10,
    width: "15%",
    height: "87%",
    padding: 1,
    position: "relative",
  },

  img: {
    width: "70%",
    height: "100%",
    position: "absolute",
  },

  img1: {
    width: "60%",
    height: "100%",
    position: "absolute",
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
  },

  card: {
    height: 157,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "rgb(171, 137, 125)",
    flexDirection: "row",
  },

  containerParagrafo: {
    width: "75%",
    paddingLeft: 10,
  },

  cardTitulo: {
    color: "#fff",
    fontSize: 19,
    marginTop: 10,
    fontWeight: "bold",
  },

  cardP: {
    color: "#fff",
    marginTop: 10,
  },

  p: {
    marginBottom: 10,
    marginTop: 20,
  },
});

export default styles;

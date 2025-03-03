import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 30,
  },

  img: {
    width: "100%",
    height: 220,
    marginBottom: 30,
  },

  texto: {
    lineHeight: 23,
    marginBottom: 30,
  },

  container: {
    paddingHorizontal: 30,
    marginVertical: 20,
  },

  containerCard02: {
    flexDirection: "row",
    gap: 30,
  },

  cardX: {
    backgroundColor: "rgb(0, 128, 0)",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  cardPs: {
    backgroundColor: "rgb(0, 0, 255)",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  cardNtn: {
    backgroundColor: "rgb(252, 0, 0)",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  texto02: {
    textAlign: "center",
    fontWeight: "500",
    color: "#fff",
  },

  imgCard: {
    tintColor: "#fff",
    marginBottom: 10,
  },

  containerCard: {
    gap: 30,
  },
});

export default styles;

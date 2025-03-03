import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgBtn: {
    width: "40%",
    height: "80%",
  },

  container: {
    backgroundColor: "#2c2e2d",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  titulo: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#107d0e",
    textAlign: "center",
  },

  texto01: {
    color: "#fff",
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#107d0e",
    marginTop: 30,
    height: 130,
    width: 300,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 50,
    alignItems: "center",
    gap: 20,
  },

  textoBtn: {
    color: "#fff",
    fontSize: 23,
    width: 130,
  },
});

export default styles;

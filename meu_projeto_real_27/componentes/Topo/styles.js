import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#00a79d",

    paddingVertical: 40,
    paddingHorizontal: 1,

    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  boxIcone: {
    width: 60,
    height: 60,

    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 1,

    marginRight: 15,
  },

  boxTitulo: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    textTransform: "uppercase",
  },

  boxSubtitulo: {
    color: "#fff",
  },
});

export default styles;

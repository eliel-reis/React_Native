import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255,0.3)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
    marginBottom: 40,
  },

  container02: {
    backgroundColor: "rgba(255, 255, 255,0.3)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
    marginBottom: 40,
    height: "50%",
  },

  titulo: {
    color: "#fff",
    fontSize: 17,
    FontWeight: "500",
  },

  linhaInput: {
    flexDirection: "row",
    marginTop: 15,
  },

  label: {
    backgroundColor: "rgb(74, 233, 74)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 20,
  },

  input: {
    width: "42%",
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  texto01: {
    fontSize: 90,
    color: "#fff",
  },

  texto02: {
    color: "#fff",
    fontSize: 23,
    marginTop: 15,
  },
});

export default styles;

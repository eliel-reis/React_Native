import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(214, 214, 214)",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  card: {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
    borderBottomColor: "rgb(222, 222, 222)",
    borderBottomWidth: 2,
    paddingBottom: 3,
  },

  icones: {
    flexDirection: "row",
    width: "100%",
    height: 30,
  },
});

export default styles;

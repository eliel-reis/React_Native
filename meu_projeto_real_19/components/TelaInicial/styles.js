import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d7",
    justifyContent: "center",
    alignItems: "center",
  },

  subContainer: {
    height: "60%",
    width: "80%",
    borderColor: "#979797",
    borderWidth: 1,
    paddingHorizontal: "2%",
    paddingVertical: "5%",
    alignItems: "center",
    borderRadius: "2%",
    backgroundColor: "white",
  },

  img: {
    width: "100%",
    height: "40%",
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 10,
  },

  texto01: {
    marginBottom: 20,
  },

  btn_container: {
    marginTop: 10,
    gap: 10,
    width: "100%",
  },
});

export default styles;

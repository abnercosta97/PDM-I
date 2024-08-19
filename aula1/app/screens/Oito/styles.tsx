import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#333",
  },
  formContainer: {
    width: "100%",
    maxWidth: 270,
    padding: 20,
    color: "#333",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    alignSelf: "center",
    color: "yellow",
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    alignSelf: "flex-start",
    marginBottom: 4,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    color: "black",
    backgroundColor: "#fff8dc",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  button: {
    width: "48%",
    height: 40,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    color: "white",
  },
});

export default styles;

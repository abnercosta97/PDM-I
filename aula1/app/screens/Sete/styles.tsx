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
  text: {
    alignSelf: "flex-start",
    marginBottom: 4,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    color: "white",
    backgroundColor: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  button: {
    width: "48%",
    height: 40,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  resultText: {
    color: "white",
    alignSelf: "flex-start",
  },
});

export default styles;

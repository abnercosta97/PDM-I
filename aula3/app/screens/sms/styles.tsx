import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },

  topSection: {
    backgroundColor: "crimson",
    flexDirection: "row",
    flex: 0.5,
  },

  bottomSection: {
    backgroundColor: "salmon",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  leftSection: {
    flex: 0.5,
    backgroundColor: "lime",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    flex: 0.5,
    backgroundColor: "aquamarine",
    flexDirection: "column",
  },
  rightTopSection: {
    flex: 0.5,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  rightBottomSection: {
    flex: 0.5,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

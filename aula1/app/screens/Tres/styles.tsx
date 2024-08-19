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
  },
  leftSection: {
    flex: 0.5,
    backgroundColor: "lime",
  },
  rightSection: {
    flex: 0.5,
    backgroundColor: "aquamarine",
    flexDirection: "column",
  },
  rightTopSection: {
    flex: 0.5,
    backgroundColor: "teal",
  },
  rightBottomSection: {
    flex: 0.5,
    backgroundColor: "skyblue",
  },
});

export default styles;

import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#009688",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "800",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
});

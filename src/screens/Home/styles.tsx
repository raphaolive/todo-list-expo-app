import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    color: "#808080",
    padding: 24,
  },

  header: {
    backgroundColor: colors.gray700,
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },

  formContainer: {
    height: 54,
    marginTop: -50,
    flexDirection: "row",
  },

  textInput: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 4,
    fontSize: 16,
    paddingHorizontal: 16,
    borderColor: colors.gray700,
    backgroundColor: colors.gray500,
    color: colors.gray100,
  },

  formButton: {
    height: 52,
    width: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blueDark,
  },

  progressStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },

  progressStatusText: {
    fontWeight: "bold",
    marginRight: 4,
  },

  progressStatusCount: {
    backgroundColor: colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    color: colors.gray200,
  },

  emptyListContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray500,
    paddingTop: 50,
    alignItems: "center",
  },

  baseText: {
    color: colors.gray300,
  },
});

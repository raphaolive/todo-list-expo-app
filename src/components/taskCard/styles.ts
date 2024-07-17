import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    minHeight: 64,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray400,
    backgroundColor: colors.gray500,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: 16,
    marginBottom: 12,
  },
  taskDescription: {
    flex: 1,
    fontSize: 14,
    color: colors.gray100,
  },
});

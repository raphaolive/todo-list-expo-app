import { Text, Touchable, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function TaskCard({
  id,
  description,
  completed,
  onToggleTask,
  onRemoveTask,
}: {
  id: string;
  completed: boolean;
  description: string;
  onToggleTask(id: string): void;
  onRemoveTask(id: string): void;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggleTask(id)}>
        {!completed ? (
          <Entypo name="circle" size={20} color={colors.blue} />
        ) : (
          <AntDesign name="checkcircle" size={20} color={colors.purple} />
        )}
      </TouchableOpacity>
      <Text
        style={
          completed
            ? { ...styles.taskDescription, textDecorationLine: "line-through" }
            : { ...styles.taskDescription }
        }
      >
        {description}
      </Text>
      <TouchableOpacity onPress={() => onRemoveTask(id)}>
        <Ionicons name="trash-outline" size={22} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  );
}

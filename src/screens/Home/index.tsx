import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import uuid from "react-native-uuid";

import Ionicons from "@expo/vector-icons/Ionicons";

import TaskCard from "../../components/taskCard";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

type TaskType = {
  id: string;
  completed: boolean;
  description: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

  function handleSetTaskDescription(description: string) {
    setTaskDescription(description);
  }

  function handleAddTask() {
    if (!taskDescription.length) {
      return Alert.alert(
        "Campo vazio.",
        "Escreva alguma task antes de adicionar em sua lista"
      );
    }

    console.log({
      id: String(uuid.v4()),
      completed: false,
      description: taskDescription,
    });

    setTasks((prevTaskList) => [
      ...prevTaskList,
      { id: String(uuid.v4()), completed: false, description: taskDescription },
    ]);
    setTaskDescription("");
  }

  function handleToggleTask(id: string) {
    setTasks((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleRemoveTask(id: string) {
    return Alert.alert(
      "Remover tarefa.",
      "Tem certeza que deseja remover esta tarefa?",
      [
        {
          text: "Sim",
          onPress: () =>
            setTasks((prevList) => prevList.filter((task) => task.id !== id)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  const sortedTasksList = tasks.sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  const completedTasksAmount = tasks.filter((task) => task.completed).length;

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
            onChangeText={handleSetTaskDescription}
            value={taskDescription}
          />
          <TouchableOpacity style={styles.formButton} onPress={handleAddTask}>
            <Ionicons name="add-circle-outline" size={18} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.progressStatusContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...styles.progressStatusText, color: colors.blue }}>
              Criadas
            </Text>
            <View style={styles.progressStatusCount}>
              <Text style={{ color: colors.gray200 }}>{tasks.length}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ ...styles.progressStatusText, color: colors.purple }}
            >
              Concluídas
            </Text>
            <View style={styles.progressStatusCount}>
              <Text style={{ color: colors.gray200 }}>
                {completedTasksAmount}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          style={{ flex: 1 }}
          data={sortedTasksList}
          renderItem={({ item, index }) => (
            <TaskCard
              key={item.id}
              id={item.id}
              description={item.description}
              completed={item.completed}
              onToggleTask={handleToggleTask}
              onRemoveTask={handleRemoveTask}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Image
                source={require("../../assets/clipboard.png")}
                style={{ marginBottom: 20 }}
              />
              <Text style={{ ...styles.baseText, fontWeight: "bold" }}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.baseText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}

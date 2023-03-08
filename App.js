import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoalList((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoalList((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.AppContainer}>
      <GoalInput onAddGoalHanlder={addGoalHandler} />
      <View style={styles.GoalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(obj) => {
            return (
              <GoalItem
                text={obj.item.text}
                onDeleteItem={deleteGoalHandler}
                id={obj.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  GoalsContainer: {
    flex: 6,
  },
});

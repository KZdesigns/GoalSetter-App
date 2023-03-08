import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoalList((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    hideModalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalList((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.AppContainer}>
      <Button title="Add New Goal" color="#4da0ff" onPress={showModalHandler} />
      <GoalInput
        onAddGoalHanlder={addGoalHandler}
        visible={modalIsVisible}
        onCancel={hideModalHandler}
      />
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
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  GoalsContainer: {
    flex: 6,
  },
});

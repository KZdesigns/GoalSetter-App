import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoalList((prevState) => [...prevState, { text: enteredGoalText }]);
  }

  return (
    <View style={styles.AppContainer}>
      <GoalInput onAddGoalHanlder={addGoalHandler} />
      <View style={styles.GoalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(obj) => {
            return <GoalItem text={obj.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return index;
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

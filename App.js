import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoalList((prevState) => [...prevState, enteredGoalText]);
    setGoalText("");
  }

  return (
    <View style={styles.AppContainer}>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.Input}
          placeholder="Type goal here"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.GoalsContainer}>
        <ScrollView>
          {goalList.map((goal, index) => (
            <View style={styles.GoalItem} key={index}>
              <Text style={styles.GoalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  InputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  Input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    width: "70%",
  },
  GoalsContainer: {
    flex: 6,
  },
  GoalItem: {
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#4da0ff",
    margin: 10,
    padding: 10,
  },
  GoalItemText: {
    color: "#fff",
  },
});

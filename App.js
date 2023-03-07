import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

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
        {goalList.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  InputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
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
});

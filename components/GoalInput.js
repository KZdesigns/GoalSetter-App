import React, { useState } from "react";
import { TextInput, Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
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
});

function GoalInput(props) {
  const [enteredGoalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoalHanlder(enteredGoalText);
    setGoalText("");
  }

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.Input}
        placeholder="Type goal here"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      ></TextInput>
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

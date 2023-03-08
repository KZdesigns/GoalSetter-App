import React, { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.InputContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/images/goal-img.png")}
        />
        <TextInput
          style={styles.Input}
          placeholderTextColor="white"
          placeholder="Type goal here"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.ButtonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} color="white" />
          <Button title="Cancel" onPress={props.onCancel} color="white" />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4da0ff",
  },
  Input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 16,
    padding: 10,
    width: "70%",
    color: "white",
  },
  ButtonContainer: {
    flexDirection: "row",
    padding: 5,
    color: "white",
  },
  Image: {
    height: 100,
    width: 100,
    margin: 10,
  },
});

import { View, Text, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
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
  PressedItem: {
    opacity: "0.5",
  },
});

function GoalItem(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.PressedItem}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <View style={styles.GoalItem}>
        <Text style={styles.GoalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

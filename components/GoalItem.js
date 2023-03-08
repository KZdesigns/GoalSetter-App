import { View, Text, StyleSheet } from "react-native";

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
});

function GoalItem(props) {
  return (
    <View style={styles.GoalItem}>
      <Text style={styles.GoalItemText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

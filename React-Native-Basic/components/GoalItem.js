import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ itemData, deleteGoalInputHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressItem}
        onPress={() => deleteGoalInputHandler(itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    fontSize: 16,
    color: '#ffffff',
  },
});

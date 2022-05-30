import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (textInput) => {
    setEnteredGoalText(textInput);
  };

  const addGoalInputHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);

    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalInputHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goal}>List of goals...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    width: '75%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 5,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goal: {
    marginVertical: 8,
    fontSize: 24,
  },
  goalItem: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

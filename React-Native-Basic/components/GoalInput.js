import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = ({ addGoalInputHandler, modalOpen, setModalOpen }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (textInput) => {
    setEnteredGoalText(textInput);
  };

  const handleAddGoal = () => {
    addGoalInputHandler(enteredGoalText);
    setEnteredGoalText('');
    setModalOpen(false);
  };

  return (
    <Modal visible={modalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/adaptive-icon.png')}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => setModalOpen(false)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  inputIcon: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  textInput: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    padding: 8,
    color: '#311b6b',
  },
});

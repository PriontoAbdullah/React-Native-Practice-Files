import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalInputHandler = (enteredGoalText) => {
    if (enteredGoalText.length !== 0) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), text: enteredGoalText },
      ]);
    }
  };

  const deleteGoalInputHandler = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setModalOpen(true)}
        />
        {modalOpen && (
          <GoalInput
            addGoalInputHandler={addGoalInputHandler}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}

        <View style={styles.goalsContainer}>
          <Text style={styles.goal}>List of goals...</Text>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                deleteGoalInputHandler={deleteGoalInputHandler}
              />
            )}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
  goal: {
    marginVertical: 8,
    fontSize: 24,
    color: '#e4d0ff',
  },
});

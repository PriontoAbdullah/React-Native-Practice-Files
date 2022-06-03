import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 8,
    marginVertical: 6,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 3,
    shadowColor: Colors.primary800,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  itemText: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});

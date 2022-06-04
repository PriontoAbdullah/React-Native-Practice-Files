import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import GuessLogItem from '../components/game/GuessLogItem';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/UI/Card';
import PrimaryButton from '../components/UI/PrimaryButton';
import Subtitle from '../components/UI/Subtitle';
import Title from '../components/UI/Title';
import Color from '../constants/colors';

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'higher' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that is wrong....', [
        { text: 'Sorry', style: 'cancel' },
      ]);

      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    if (minBoundary === userChoice || maxBoundary === userChoice) {
      onGameOver(guessRounds.length);
      return;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      userChoice
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer style={styles.guessContainer}>
        {currentGuess}
      </NumberContainer>
      <Card>
        <Subtitle style={styles.subtitle}>Higher or Lower?</Subtitle>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              style={styles.primaryButton}
              onPressHandler={() => nextGuessHandler('lower')}
            >
              <Ionicons name="md-remove" size={24} color={Color.accent500} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              style={styles.primaryButton}
              onPressHandler={() => nextGuessHandler('higher')}
            >
              <Ionicons name="md-add" size={24} color={Color.accent500} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              style={styles.primaryButton}
              onPressHandler={() => nextGuessHandler('lower')}
            >
              <Ionicons name="md-remove" size={24} color={Color.accent500} />
            </PrimaryButton>
          </View>
          <NumberContainer style={styles.guessContainer}>
            {currentGuess}
          </NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              style={styles.primaryButton}
              onPressHandler={() => nextGuessHandler('higher')}
            >
              <Ionicons name="md-add" size={24} color={Color.accent500} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - index}
              guess={item}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Color.accent500,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  subtitle: {
    marginBottom: 10,
  },
  guessContainer: {
    marginTop: 44,
  },
  primaryButton: {
    fontSize: 24,
  },
  listContainer: {
    flex: 1,
    padding: 16,
    marginTop: 10,
  },
});

import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/Title';
import Colors from '../constants/colors';

const GameOverScreen = ({ roundsNumber, userChoice, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.textContainer}>
        Your phone needed <Text style={styles.text}>{roundsNumber}</Text> rounds
        to guess the number
        <Text style={styles.text}> {userChoice}</Text>.
      </Text>
      <PrimaryButton
        style={styles.primaryButton}
        onPressHandler={onStartNewGame}
      >
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: 'hidden',
    margin: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    marginBottom: 24,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'open-sans',
    color: Colors.primary700,
  },
  text: {
    fontSize: 28,
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
  primaryButton: {
    fontSize: 20,
  },
});

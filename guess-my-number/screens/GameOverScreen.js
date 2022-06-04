import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/Title';
import Colors from '../constants/colors';

const GameOverScreen = ({ roundsNumber, userChoice, onStartNewGame }) => {
  const { height, width } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 600) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game is Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
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

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 100 : 150,
    // height: deviceWidth < 380 ? 200 : 300,
    // width: deviceWidth < 380 ? 200 : 300,
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

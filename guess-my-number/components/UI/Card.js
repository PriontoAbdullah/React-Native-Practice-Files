import {
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Color from '../../constants/colors';

const Card = ({ children }) => {
  const { height } = useWindowDimensions();

  return (
    <View
      style={[styles.cardContainer, { width: height < 500 ? '50%' : '85%' }]}
    >
      {children}
    </View>
  );
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: deviceWidth < 380 ? 10 : 15,
    backgroundColor: Color.primary800,
    // shadow for Android
    elevation: 4,
    // shadow for IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
});

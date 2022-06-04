import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 32 : 44,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});

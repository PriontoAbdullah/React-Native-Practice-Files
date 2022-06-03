import { StyleSheet, Text } from 'react-native';
import Color from '../../constants/colors';

const Subtitle = ({ children, style }) => {
  return <Text style={[styles.subtitleText, style]}>{children}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleText: {
    fontSize: 24,
    color: Color.accent500,
    fontFamily: 'open-sans',
  },
});

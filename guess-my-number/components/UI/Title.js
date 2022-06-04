import { Platform, StyleSheet, Text } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    maxWidth: '80%',
    width: 300,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: Platform.select({ android: 'white', ios: 'black' }),
    padding: 12,
    marginTop: 50,
    borderRadius: 12,
  },
});

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPressHandler, style }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.buttonText, style]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 6,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  // ripple effect for IOS
  pressed: {
    opacity: 0.75,
  },
});

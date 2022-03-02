import React from 'react';
import { 
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle, 
} from 'react-native';
import { styles } from '../styles/theme';

interface StyledButton {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const StyledButton = ( { 
  text, 
  onPress,
  backgroundColor = 'dodgerblue', 
  color = 'black', 
  buttonStyle, 
  textStyle 
}: StyledButton ) => {
  return (
    <Pressable
      style={ [ styles.funcButton, { backgroundColor }, buttonStyle ] }
      onPress={ onPress }
    >
      <Text style={ [ styles.funcButtonText, { color }, textStyle ] }>
        { text }
      </Text>
    </Pressable>
  );
};

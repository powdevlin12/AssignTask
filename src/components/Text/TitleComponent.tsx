import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import theme from '../../constants/theme';
import TextComponent from './TextComponent';

interface Props {
  text: string;
  size?: number;
  flex?: number;
  font?: string;
  color?: string;
  numberOfLines?: number;
  styles?: StyleProp<TextStyle>;
}

const TitleComponent = ({
  text,
  color,
  font,
  size,
  styles,
  flex,
  numberOfLines,
}: Props) => {
  return (
    <TextComponent
      size={size ?? theme.fontSize.tilte}
      font={font ?? theme.fontFamilies.MontserratSemiBold}
      color={color}
      text={text}
      flex={flex}
      styles={styles}
      numberOfLines={numberOfLines ?? 0}
    />
  );
};

export default TitleComponent;

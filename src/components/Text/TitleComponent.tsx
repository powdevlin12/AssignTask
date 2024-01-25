import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';
import TextComponent from './TextComponent';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
}

const TitleComponent = ({text, color, font, size}: Props) => {
  return (
    <TextComponent
      size={size ?? 20}
      font={font ?? theme.fontFamilies.MontserratSemiBold}
      color={color}
      text={text}
    />
  );
};

export default TitleComponent;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';

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
      font={font ?? fontFamilies.MontserratSemiBold}
      color={color}
      text={text}
    />
  );
};

export default TitleComponent;

const styles = StyleSheet.create({});

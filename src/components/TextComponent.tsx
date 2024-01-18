import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/global.styles';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
}

const TextComponent = ({text, font, size, color, flex}: Props) => {
  return (
    <View>
      <Text
        style={[
          globalStyle.text,
          {
            fontFamily: font ?? fontFamilies.MontserratRegular,
            fontSize: size ?? 14,
            color: color ?? colors.text,
            flex: flex ?? 1,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});

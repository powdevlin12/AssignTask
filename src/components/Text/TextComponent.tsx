import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../styles/global.styles';
import theme from '../../constants/theme';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
  numberOfLines?: number;
  styles?: StyleProp<TextStyle>;
}

const TextComponent = ({
  text,
  font,
  size,
  color,
  flex,
  numberOfLines,
}: Props) => {
  return (
    <View>
      <Text
        style={[
          globalStyle.text,
          {
            fontFamily: font ?? theme.fontFamilies.MontserratRegular,
            fontSize: size ?? theme.fontSize.paragraph,
            color: color ?? theme.colors.text,
            flex: flex ?? 1,
          },
          styles,
        ]}
        numberOfLines={numberOfLines ?? 0}>
        {text}
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});

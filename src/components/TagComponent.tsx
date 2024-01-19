import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {globalStyle} from '../styles/global.styles';
import TextComponent from './TextComponent';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  color?: string;
  tagStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const TagComponent = ({text, color, onPress, tagStyle, textStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tagStyle,
        globalStyle.tag,
        {backgroundColor: color ?? colors.blue},
      ]}
      disabled={!onPress}>
      <TextComponent styles={textStyle} text={text} />
    </TouchableOpacity>
  );
};

export default TagComponent;

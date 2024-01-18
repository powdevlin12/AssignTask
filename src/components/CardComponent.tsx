import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global.styles';
import {colors} from '../constants/colors';

interface Props {
  children: ReactNode;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const CardComponent = ({children, styles, bgColor}: Props) => {
  return (
    <View
      style={[
        globalStyle.inputContainer,
        {padding: 12, backgroundColor: bgColor ?? colors.gray},
        styles,
      ]}>
      {children}
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({});

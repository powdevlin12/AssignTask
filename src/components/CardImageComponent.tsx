import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global.styles';

interface Props {
  children: ReactNode;
  color?: string;
}

const CardImageComponent = ({children, color}: Props) => {
  return <View style={globalStyle.inputContainer}>{children}</View>;
};

export default CardImageComponent;

const styles = StyleSheet.create({});

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global.styles';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children?: ReactNode;
}

const Container = (props: Props) => {
  const {back, children, right, title} = props;
  return <ScrollView style={globalStyle.container}>{children}</ScrollView>;
};

export default Container;

const styles = StyleSheet.create({});
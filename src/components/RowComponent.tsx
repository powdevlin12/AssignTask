import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global.styles';

interface Props {
  children: ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
}

const RowComponent = (props: Props) => {
  const {children, justifyContent, onPress, styles} = props;
  const localStyle = [
    globalStyle.row,
    {justifyContent: justifyContent ?? 'center'},
    styles,
  ];

  return onPress ? (
    <TouchableOpacity style={localStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponent;

const styles = StyleSheet.create({});

import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
  styles?: StyleProp<ViewStyle>;
}

const SpaceComponent = ({height, width, styles}: Props) => {
  return <View style={[{width, height}, styles]} />;
};

export default SpaceComponent;

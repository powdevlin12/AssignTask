import {View} from 'react-native';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
}

const SpaceComponent = ({height, width}: Props) => {
  return <View style={{width, height}} />;
};

export default SpaceComponent;

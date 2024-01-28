import React, {ReactNode} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import {globalStyle} from '../../styles/global.styles';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const SectionComponent = (props: Props) => {
  const {styles, children} = props;
  return <View style={[globalStyle.section, styles]}>{children}</View>;
};

export default SectionComponent;

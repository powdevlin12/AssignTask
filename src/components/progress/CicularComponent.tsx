import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import TextComponent from '../Text/TextComponent';
import theme from '../../constants/theme';

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
  size?: number;
}

export default function CicularComponent({
  size,
  value,
  color,
  maxValue,
}: Props) {
  return (
    <AnimatedCircularProgress
      size={size ?? 100}
      width={12}
      fill={value}
      tintColor={color ?? '#00e0ff'}
      onAnimationComplete={() => console.log('onAnimationComplete')}
      backgroundColor="#3d5875"
      rotation={0}
      childrenContainerStyle={{justifyContent: 'center'}}>
      {() => (
        <TextComponent
          font={theme.fontFamilies.MontserratSemiBold}
          size={18}
          text={`${value.toString()}%`}
          flex={0}
        />
      )}
    </AnimatedCircularProgress>
  );
}

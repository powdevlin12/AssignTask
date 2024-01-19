import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {fontFamilies} from '../constants/fontFamilies';
import TextComponent from './TextComponent';

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
}

export default function CicularComponent({value, color, maxValue}: Props) {
  return (
    <AnimatedCircularProgress
      size={100}
      width={12}
      fill={value}
      tintColor={color ?? '#00e0ff'}
      onAnimationComplete={() => console.log('onAnimationComplete')}
      backgroundColor="#3d5875"
      rotation={0}
      childrenContainerStyle={{justifyContent: 'center'}}>
      {() => (
        <TextComponent
          font={fontFamilies.MontserratBold}
          size={18}
          text={`${value.toString()}%`}
          flex={0}
        />
      )}
    </AnimatedCircularProgress>
  );
}

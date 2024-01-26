import React, {ReactNode} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import images from '../../assets/images';
import theme from '../../constants/theme';
import {globalStyle} from '../../styles/global.styles';

interface Props {
  children: ReactNode;
  color?: string;
}

const CardImageComponent = ({children, color}: Props) => {
  return (
    <ImageBackground
      source={images.bg.card}
      style={globalStyle.card}
      resizeMode="contain">
      <View
        style={[
          styles.content,
          {backgroundColor: color ?? 'rgba(113,77,217, 0.9)'},
        ]}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default CardImageComponent;

const styles = StyleSheet.create({
  content: {
    paddingVertical: theme.size[3],
    paddingHorizontal: theme.size[3],
    borderRadius: theme.border.medium,
    overflow: 'hidden',
    flex: 1,
  },
});

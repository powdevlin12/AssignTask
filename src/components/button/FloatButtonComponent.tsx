import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextComponent} from '../Text';
import theme from '../../constants/theme';
import {Add} from 'iconsax-react-native';
import {SpaceComponent} from '../layout';

interface Props {
  title: string;
  onPress: () => void;
}

const FloatButtonComponent = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Add size="24" color={theme.colors.text} />
      <SpaceComponent width={theme.size[2]} />
      <TextComponent
        text={title}
        size={theme.fontSize.paragraphLarge}
        flex={0}
      />
    </TouchableOpacity>
  );
};

export default FloatButtonComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.size[4] * 0.8,
    width: '100%',
    borderRadius: theme.border.large,
    backgroundColor: theme.colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: theme.size[4],
    left: 0,
    right: 0,
  },
});

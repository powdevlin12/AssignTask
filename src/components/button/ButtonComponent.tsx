import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import theme from '../../constants/theme';
import {TitleComponent} from '../Text';

interface IButtonComponentProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  color?: string;
}

const ButtonComponent = ({
  title,
  backgroundColor,
  color,
  ...rest
}: IButtonComponentProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: backgroundColor ?? theme.colors.blue},
      ]}
      {...rest}>
      <TitleComponent
        size={theme.fontSize.paragraphLarge}
        text={title}
        flex={0}
        color={color}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.border.medium,
    paddingVertical: theme.size[3],
    paddingHorizontal: theme.size[4],
  },
});

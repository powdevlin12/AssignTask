import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import theme from '../../constants/theme';
import {TitleComponent} from '../Text';

interface IButtonComponentProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  isLoading?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const ButtonComponent = ({
  title,
  backgroundColor,
  color,
  isLoading,
  styles,
  ...rest
}: IButtonComponentProps) => {
  return (
    <TouchableOpacity
      style={[
        stylesLocal.container,
        {backgroundColor: backgroundColor ?? theme.colors.blue},
        styles,
      ]}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.text} />
      ) : (
        <TitleComponent
          size={theme.fontSize.paragraphLarge}
          text={title}
          flex={0}
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const stylesLocal = StyleSheet.create({
  container: {
    borderRadius: theme.border.medium,
    paddingVertical: theme.size[3],
    paddingHorizontal: theme.size[4],
  },
});

import React, {ReactNode} from 'react';
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
import {WIDTH} from '../../constants/dimension';

interface IButtonComponentProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  isLoading?: boolean;
  icon?: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const ButtonComponent = ({
  title,
  backgroundColor,
  color,
  isLoading,
  styles,
  icon,
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
      ) : icon ? (
        icon
      ) : (
        <TitleComponent
          size={theme.fontSize.paragraphLarge}
          text={title}
          flex={0}
          color={color}
          styles={{textAlign: 'center'}}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const stylesLocal = StyleSheet.create({
  container: {
    borderRadius: theme.border.medium,
    paddingVertical: theme.size[4],
    paddingHorizontal: theme.size[4],
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: WIDTH * 0.6,
  },
});

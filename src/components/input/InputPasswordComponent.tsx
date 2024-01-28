import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {InputComponent} from '.';
import theme from '../../constants/theme';
import {Eye, EyeSlash, Lock1} from 'iconsax-react-native';

interface IInputPasswordComponentProps {
  title: string;
  changeValueHandle: (text: string) => void;
}

const InputPasswordComponent = ({
  title,
  changeValueHandle,
}: IInputPasswordComponentProps) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const togglePassword = () => {
    setIsPassword(prev => !prev);
  };

  return (
    <InputComponent
      title={title}
      changeValueHandle={changeValueHandle}
      prefix={<Lock1 size="22" color={theme.colors.text} />}
      affix={
        isPassword ? (
          <TouchableOpacity onPress={togglePassword}>
            <Eye size="22" color={theme.colors.text} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={togglePassword}>
            <EyeSlash size="22" color={theme.colors.text} />
          </TouchableOpacity>
        )
      }
      isPassword={isPassword}
    />
  );
};

export default InputPasswordComponent;

const styles = StyleSheet.create({});

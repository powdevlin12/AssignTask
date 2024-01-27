import {Refresh2} from 'iconsax-react-native';
import React, {ReactNode, useRef} from 'react';
import {TextInput, TextInputProps, TouchableOpacity, View} from 'react-native';
import theme from '../../constants/theme';
import {globalStyle} from '../../styles/global.styles';
import lodash from '../../utils/lodash';
import {TitleComponent} from '../Text';
import {RowComponent, SpaceComponent} from '../layout';

interface Props extends TextInputProps {
  title: string;
  prefix?: ReactNode;
  affix?: ReactNode;
  allowClear?: boolean;
  value?: string;
  changeValueHandle: (text: string) => void;
}

const InputComponent = ({
  affix,
  allowClear,
  prefix,
  title,
  value,
  changeValueHandle,
  ...rest
}: Props) => {
  const textInputRef = useRef<TextInput>(null);

  return (
    <View>
      {!lodash.isEmpty(title) && (
        <TitleComponent text={title} flex={0} size={theme.fontSize.paragraph} />
      )}
      <SpaceComponent height={theme.size[2]} />
      <RowComponent
        styles={[globalStyle.inputContainer, {paddingVertical: theme.size[2]}]}
        justifyContent="space-between">
        {!lodash.isEmpty(prefix) && prefix}
        <SpaceComponent width={theme.size[2]} />
        <TextInput
          style={[globalStyle.text, {flex: 1}]}
          placeholderTextColor={theme.colors.textOpacity}
          ref={textInputRef}
          value={value}
          onChangeText={text => changeValueHandle(text)}
          {...rest}
        />
        {!lodash.isEmpty(affix) && allowClear && lodash.isEmpty(value) && affix}
        {allowClear && !lodash.isEmpty(value) && (
          <TouchableOpacity onPress={() => changeValueHandle('')}>
            <Refresh2 size="22" color={theme.colors.danger} />
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;

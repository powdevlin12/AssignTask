import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectModel} from '../../../models';
import {RowComponent} from '../../../components/layout';
import {TextComponent} from '../../../components/Text';
import theme from '../../../constants/theme';
import {TickSquare} from 'iconsax-react-native';

interface IItemMemberProps {
  handleSelectMember: (memberId: string) => void;
  isSelected: boolean;
}

const ItemMember = ({
  label,
  value,
  isSelected,
  handleSelectMember,
}: IItemMemberProps & SelectModel) => {
  return (
    <RowComponent
      styles={{paddingVertical: theme.size[4]}}
      justifyContent="space-between"
      onPress={() => handleSelectMember(value)}>
      <TextComponent
        text={label}
        flex={0}
        color={isSelected ? theme.colors.checked : theme.colors.text}
      />
      {isSelected && <TickSquare size={22} color={theme.colors.checked} />}
    </RowComponent>
  );
};

export default ItemMember;

const styles = StyleSheet.create({});

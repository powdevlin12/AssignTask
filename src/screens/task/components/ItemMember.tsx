import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectModel} from '../../../models';
import {RowComponent} from '../../../components/layout';
import {TextComponent} from '../../../components/Text';
import theme from '../../../constants/theme';

const ItemMember = ({label, value}: SelectModel) => {
  return (
    <RowComponent
      styles={{paddingVertical: theme.size[4]}}
      justifyContent="space-between">
      <TextComponent text={label} />
    </RowComponent>
  );
};

export default ItemMember;

const styles = StyleSheet.create({});

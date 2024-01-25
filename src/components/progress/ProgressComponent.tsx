import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DimensionValue} from 'react-native';
import {TextComponent} from '../Text';
import {RowComponent} from '../layout';
import theme from '../../constants/theme';

interface Props {
  title?: string;
  color?: string;
  percent: DimensionValue;
  size?: 'default' | 'medium' | 'large';
}

const ProgressComponent = ({title, size, color, percent}: Props) => {
  const heightProgress = size === 'large' ? 14 : size === 'medium' ? 12 : 10;
  return (
    <View style={styles.container}>
      <View style={[styles.progress, {height: heightProgress}]}>
        <View
          style={[
            styles.progressPercent,
            {
              height: heightProgress,
              width: percent,
              backgroundColor: color ?? theme.colors.blue,
            },
          ]}
        />
      </View>
      <RowComponent justifyContent="space-between">
        <TextComponent text={title ?? 'Progress'} />
        <TextComponent text={`${percent}`} />
      </RowComponent>
    </View>
  );
};

export default ProgressComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.size[2],
  },
  progress: {
    backgroundColor: theme.colors.desc,
    borderRadius: theme.border.medium,
    marginBottom: theme.size[1],
  },
  progressPercent: {
    borderRadius: theme.border.medium,
  },
});

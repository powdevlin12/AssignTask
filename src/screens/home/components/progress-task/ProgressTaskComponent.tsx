import {DimensionValue, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CardImageComponent} from '../../../../components/card';
import {Edit2} from 'iconsax-react-native';
import {TextComponent, TitleComponent} from '../../../../components/Text';
import {AvatarGroupComponent} from '../avatar-group';
import {ProgressComponent} from '../../../../components/progress';
import theme from '../../../../constants/theme';

interface Progress {
  percent: DimensionValue;
  titleProgress: string;
  colorProgress?: string;
}

interface Props {
  title: string;
  content?: string;
  dueDate?: string;
  color?: string;
  group?: string[];
  progress?: Progress;
}

const ProgressTaskComponent = ({
  title,
  content,
  progress,
  dueDate,
  color,
  group,
}: Props) => {
  return (
    <CardImageComponent color={color}>
      <TouchableOpacity style={styles.iconCard} onPress={() => {}}>
        <Edit2 size="20" color={theme.colors.white} />
      </TouchableOpacity>
      <TitleComponent text={title} />
      {content && <TextComponent text={content} />}
      {!group ? null : <AvatarGroupComponent />}
      {progress && (
        <ProgressComponent
          percent={progress.percent}
          title={progress.titleProgress}
          color={progress?.colorProgress ?? '#0aacff'}
        />
      )}
      {dueDate && (
        <TitleComponent
          text={dueDate}
          color={theme.colors.desc}
          size={theme.fontSize.note}
        />
      )}
    </CardImageComponent>
  );
};

export default ProgressTaskComponent;

const styles = StyleSheet.create({
  iconCard: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.2)',
    padding: theme.size[2],
    borderRadius: theme.border.large,
  },
});

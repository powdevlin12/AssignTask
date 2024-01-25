import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {RowComponent} from '../../../../components/layout';
import theme from '../../../../constants/theme';
import {TextComponent, TitleComponent} from '../../../../components/Text';
import {globalStyle} from '../../../../styles/global.styles';

const total = 10;
const tempImg =
  'https://wallpapers-clan.com/wp-content/uploads/2023/08/dbz-vegeta-blue-wallpaper.jpg';
const AvatarGroupComponent = () => {
  const group: string[] = new Array(total).fill(tempImg);
  return (
    <RowComponent
      justifyContent="flex-start"
      styles={{marginVertical: theme.size[3]}}>
      {group.map((avatar, index) => {
        if (index < 4) {
          return (
            <Image
              source={{uri: tempImg}}
              style={[
                styles.avatar,
                {marginLeft: index > 0 ? -theme.size[4] : 0},
              ]}
              resizeMode="cover"
              key={`groupAvatar${index}`}
            />
          );
        }
      })}
      <View
        style={[styles.avatar, {backgroundColor: 'rgba(255,255,255, 0.7)'}]}>
        <TitleComponent
          text={`+${total - 4 > 9 ? 0 : total - 4}`}
          size={theme.fontSize.paragraph}
          flex={0}
        />
      </View>
    </RowComponent>
  );
};

export default AvatarGroupComponent;

const styles = StyleSheet.create({
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.white,
    marginLeft: -theme.size[3],
    alignItems: 'center',
    justifyContent: 'center',
  },
});

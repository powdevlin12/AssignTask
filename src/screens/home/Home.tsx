import {
  Edit2,
  Element4,
  Notification,
  SearchNormal,
} from 'iconsax-react-native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../../styles/global.styles';
import theme from '../../constants/theme';
import {
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from '../../components/layout';
import {TextComponent, TitleComponent} from '../../components/Text';
import {CardComponent, CardImageComponent} from '../../components/card';
import {TagComponent} from '../../components/tag';
import {CicularComponent} from '../../components/cicular';
import {AvatarGroupComponent} from './components/avatar-group';

export default function Home() {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justifyContent="space-between">
          <Element4 size="28" color={theme.colors.desc} variant="Outline" />
          <Notification size="28" color={theme.colors.desc} variant="Outline" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Dat Tran" />
        <TitleComponent text="Be Productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          onPress={() => console.log('Say Hiii')}
          styles={{
            ...globalStyle.inputContainer,
          }}
          justifyContent="space-between">
          <TextComponent
            text="Search task"
            flex={1}
            color={theme.colors.textOpacity}
          />
          <SearchNormal size="20" color={theme.colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 task done" />
              <SpaceComponent height={8} />
              <RowComponent justifyContent="flex-start">
                <TagComponent text="Match 22" />
              </RowComponent>
            </View>
            <View>
              <CicularComponent value={30} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent>
          <View style={{flex: 1}}>
            <CardImageComponent>
              <TouchableOpacity style={styles.iconCard} onPress={() => {}}>
                <Edit2 size="20" color={theme.colors.white} />
              </TouchableOpacity>
              <TitleComponent text="UX Design" />
              <TextComponent text="Task mamagement mobile app" />
              <AvatarGroupComponent />
              <TitleComponent
                text="Due, 12 Jun 2024"
                color={theme.colors.desc}
                size={theme.fontSize.note}
              />
            </CardImageComponent>
          </View>
          <SpaceComponent width={theme.size[4]} />
          <View style={{flex: 1}}>
            <CardImageComponent color="rgba(33,150,243,0.9)">
              <TouchableOpacity style={styles.iconCard} onPress={() => {}}>
                <Edit2 size="20" color={theme.colors.white} />
              </TouchableOpacity>
              <TitleComponent text="API payment" />
            </CardImageComponent>
            <SpaceComponent height={16} />
            <CardImageComponent color="rgba(18,181, 22,0.9)">
              <TouchableOpacity style={styles.iconCard} onPress={() => {}}>
                <Edit2 size="20" color={theme.colors.white} />
              </TouchableOpacity>
              <TitleComponent text="Update work" />
              <TextComponent text="Revision home page" />
            </CardImageComponent>
          </View>
        </RowComponent>
      </SectionComponent>
    </Container>
  );
}

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

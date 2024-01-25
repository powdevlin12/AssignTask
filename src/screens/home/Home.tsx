import {Element4, Notification, SearchNormal} from 'iconsax-react-native';
import React from 'react';
import {View} from 'react-native';
import {globalStyle} from '../../styles/global.styles';
import theme from '../../constants/theme';
import {
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from '../../components/layout';
import {TextComponent, TitleComponent} from '../../components/Text';
import {CardComponent} from '../../components/card';
import {TagComponent} from '../../components/tag';
import {CicularComponent} from '../../components/cicular';

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
        <View style={{flex: 1}} />
        <SpaceComponent width={theme.size[4]} />
        <View style={{flex: 1}} />
      </SectionComponent>
    </Container>
  );
}

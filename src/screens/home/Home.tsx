import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {globalStyle} from '../../styles/global.styles';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import CardComponent from '../../components/CardComponent';
import {Element4, Notification, SearchNormal} from 'iconsax-react-native';
import TagComponent from '../../components/TagComponent';
import SpaceComponent from '../../components/SpaceComponent';

export default function Home() {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justifyContent="space-between">
          <Element4 size="28" color={colors.desc} variant="Outline" />
          <Notification size="28" color={colors.desc} variant="Outline" />
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
            color={colors.textOpacity}
          />
          <SearchNormal size="20" color={colors.desc} />
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
              <TextComponent text="Circle" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
}

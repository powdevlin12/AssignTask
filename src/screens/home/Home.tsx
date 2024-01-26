import {Element4, Notification, SearchNormal} from 'iconsax-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextComponent, TitleComponent} from '../../components/Text';
import {CardComponent} from '../../components/card';
import {
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from '../../components/layout';
import {CicularComponent} from '../../components/progress';
import {TagComponent} from '../../components/tag';
import theme from '../../constants/theme';
import {globalStyle} from '../../styles/global.styles';
import {ProgressTaskComponent} from './components/progress-task';
import FloatButtonComponent from '../../components/button/FloatButtonComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../navigation/app.navigation';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
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
            <ProgressTaskComponent
              title="UX Design"
              content="Task mamagement mobile app"
              dueDate="Due, 12 Jun 2024"
              progress={{
                percent: '70%',
                titleProgress: 'Doing',
                colorProgress: '#0aacff',
              }}
              group={['dat']}
            />
          </View>
          <SpaceComponent width={theme.size[4]} />
          <View style={{flex: 1}}>
            <ProgressTaskComponent
              title="API payment"
              color="rgba(33,150,243,0.9)"
              progress={{
                percent: '36%',
                titleProgress: 'Done',
                colorProgress: 'rgba(18,181, 22,0.9)',
              }}
            />
            <SpaceComponent height={16} />
            <ProgressTaskComponent
              title="Update work"
              content="Revision home page"
              color="rgba(18,181, 22,0.9)"
            />
          </View>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TitleComponent text="Urgents tasks" />
        <SpaceComponent height={theme.size[3]} />
        <CardComponent>
          <RowComponent justifyContent="flex-start">
            <CicularComponent value={60} size={80} />
            <SpaceComponent width={theme.size[4]} />
            <TitleComponent
              text="Title of task"
              size={theme.fontSize.paragraphLarge}
            />
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <FloatButtonComponent
        onPress={() => navigation.navigate('AddNewTask')}
        title="Add new task"
      />
    </Container>
  );
}

const styles = StyleSheet.create({});

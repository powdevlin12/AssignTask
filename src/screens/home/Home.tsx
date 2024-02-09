/* eslint-disable react-hooks/exhaustive-deps */
import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Element4,
  Logout,
  Notification,
  SearchNormal,
} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-simple-toast';
import {TextComponent, TitleComponent} from '../../components/Text';
import FloatButtonComponent from '../../components/button/FloatButtonComponent';
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
import {TaskModel} from '../../models/TaskModel';
import {AppStackParamList} from '../../navigation/app.navigation';
import TasksService from '../../services/tasks.service';
import {globalStyle} from '../../styles/global.styles';
import {ProgressTaskComponent} from './components/progress-task';
import {format} from 'date-fns';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
  const user = auth().currentUser;
  console.log('🚀 ~ Home ~ user:', user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listTasks, setListTasks] = useState<Array<TaskModel>>([]);

  const signOutHandle = () => {
    auth().signOut();
  };

  const getMyTasksHandle = async () => {
    try {
      setIsLoading(true);
      const response = await TasksService.getInstance().getMyTask(
        user?.uid as string,
      );
      console.log('🚀 ~ getMyTasksHandle ~ response:', response);

      setListTasks(response);
    } catch (error) {
      console.log('🚀 ~ getTasksHandle ~ error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMyTasksHandle();
    Toast.showWithGravity('Welcome to our place', Toast.SHORT, Toast.CENTER);
  }, []);

  return (
    <Container>
      <ScrollView>
        <SectionComponent>
          <RowComponent justifyContent="space-between">
            <Element4 size="28" color={theme.colors.desc} variant="Outline" />
            <Notification
              size="28"
              color={theme.colors.desc}
              variant="Outline"
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent justifyContent="space-between">
            <SectionComponent>
              <TextComponent text={`Hi, ${user?.email}`} />
              <TitleComponent text="Be Productive today" />
            </SectionComponent>
            <SectionComponent>
              <TouchableOpacity onPress={signOutHandle}>
                <Logout size="26" color={theme.colors.danger} />
              </TouchableOpacity>
            </SectionComponent>
          </RowComponent>
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
            {listTasks?.[0] && (
              <>
                <View style={{flex: 1}}>
                  <ProgressTaskComponent
                    title={listTasks[0].title}
                    content={listTasks[0].description}
                    dueDate={`Due ${format(
                      listTasks[0].dueDate.toDate(),
                      'dd/MM/yyyy',
                    )}`}
                    progress={{
                      percent: `${listTasks[0].percent as number}%`,
                      titleProgress: 'Doing',
                      colorProgress: '#0aacff',
                    }}
                    group={['dat']}
                  />
                </View>
                <SpaceComponent width={theme.size[4]} />
              </>
            )}
            <View style={{flex: 1}}>
              {listTasks?.[1] && (
                <>
                  <ProgressTaskComponent
                    color="rgba(33,150,243,0.9)"
                    title={listTasks[1].title}
                    content={listTasks[1].description}
                    dueDate={`Due ${format(
                      listTasks[1].dueDate.toDate(),
                      'dd/MM/yyyy',
                    )}`}
                    progress={{
                      percent: `${listTasks[1].percent as number}%`,
                      titleProgress: 'Doing',
                      colorProgress: 'rgba(18,181, 22,0.9)',
                    }}
                    group={['dat']}
                  />
                  <SpaceComponent height={16} />
                </>
              )}
              {listTasks?.[2] && (
                <ProgressTaskComponent
                  color="rgba(18,181, 22,0.9)"
                  title={listTasks[2].title}
                  content={listTasks[2].description}
                  dueDate={`Due ${format(
                    listTasks[2].dueDate.toDate(),
                    'dd/MM/yyyy',
                  )}`}
                  progress={{
                    percent: `${listTasks[2].percent as number}%`,
                    titleProgress: 'Doing',
                    colorProgress: 'rgba(18,181, 22,0.4)',
                  }}
                  group={['dat']}
                />
              )}
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
      </ScrollView>
      <FloatButtonComponent
        onPress={() => navigation.navigate('AddNewTask')}
        title="Add new task"
      />
    </Container>
  );
}

const styles = StyleSheet.create({});

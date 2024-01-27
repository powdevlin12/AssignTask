import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PasswordCheck, User} from 'iconsax-react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {InputComponent} from '../../components/input';
import {Container, SectionComponent} from '../../components/layout';
import theme from '../../constants/theme';
import {TaskModel} from '../../models/TaskModel';
import {AppStackParamList} from '../../navigation/app.navigation';

type Props = NativeStackScreenProps<AppStackParamList, 'AddNewTask'>;

const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: '',
  start: '',
  end: '',
  uids: [],
};

const AddNewTaskScreen = ({navigation}: Props) => {
  const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);

  const changeValueHandler = (key: keyof TaskModel, value: string) => {
    setTaskDetail(prev => ({...prev, [key]: value}));
  };

  return (
    <Container>
      <SectionComponent>
        <InputComponent
          title="Title"
          placeholder="Title of task"
          allowClear={true}
          prefix={<User color={theme.colors.text} size={'20'} />}
          affix={<PasswordCheck color={theme.colors.text} size={'20'} />}
          value={taskDetail.title}
          changeValueHandle={text => changeValueHandler('title', text)}
        />
      </SectionComponent>
    </Container>
  );
};

export default AddNewTaskScreen;

const styles = StyleSheet.create({});

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Chart21, PasswordCheck, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DatetimePickerComponent} from '../../components/date-picker';
import {InputComponent} from '../../components/input';
import {
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from '../../components/layout';
import theme from '../../constants/theme';
import {TaskModel} from '../../models/TaskModel';
import {AppStackParamList} from '../../navigation/app.navigation';
import lodash from '../../utils/lodash';
import {DropdownPickerComponent} from '../../components/dropdown-picker';
import UserService from '../../services/users.service';
import {SelectModel} from '../../models';
import {UserModel} from '../../models/UserModel';

type Props = NativeStackScreenProps<AppStackParamList, 'AddNewTask'>;

const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
};

const AddNewTaskScreen = ({navigation}: Props) => {
  const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);
  const [userSelect, setUserSelect] = useState<SelectModel[]>([]);

  const changeValueHandler = (key: keyof TaskModel, value: string | Date) => {
    setTaskDetail(prev => ({...prev, [key]: value}));
  };

  const handleDataUserSelect = async () => {
    const members = await UserService.getInstance().getAllUsers();

    const userSelectPrev: SelectModel[] = [];

    members.forEach(member => {
      userSelectPrev.push({
        value: member.id as string,
        label: member.data().name as string,
      });
    });

    setUserSelect(userSelectPrev);
  };

  useEffect(() => {
    handleDataUserSelect();
  }, []);

  return (
    <Container>
      <SectionComponent
        styles={{
          marginBottom: theme.size[2],
        }}>
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
      <SectionComponent
        styles={{
          marginBottom: theme.size[2],
        }}>
        <InputComponent
          title="Description"
          placeholder="Type your description"
          allowClear={true}
          prefix={<Chart21 color={theme.colors.text} size={'20'} />}
          value={taskDetail.description}
          changeValueHandle={text => changeValueHandler('description', text)}
          multiline={true}
          numberOfLines={3}
        />
      </SectionComponent>
      <SectionComponent
        styles={{
          marginBottom: theme.size[2],
        }}>
        <DatetimePickerComponent
          title="Due date"
          onSelect={date => changeValueHandler('dueDate', date)}
          placeholder={
            lodash.isEmpty(taskDetail.dueDate) ? 'Choose due date of task' : ''
          }
          type="date"
          selected={taskDetail.dueDate}
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent>
          <View style={{flex: 1}}>
            <DatetimePickerComponent
              title="Start"
              onSelect={date => changeValueHandler('start', date)}
              placeholder={
                lodash.isEmpty(taskDetail.start) ? 'Start of due date' : ''
              }
              type="time"
              selected={taskDetail.start}
            />
          </View>
          <SpaceComponent width={theme.size[4]} />
          <View style={{flex: 1}}>
            <DatetimePickerComponent
              title="End"
              onSelect={date => changeValueHandler('end', date)}
              placeholder={
                lodash.isEmpty(taskDetail.end) ? 'End of due date' : ''
              }
              type="time"
              selected={taskDetail.end}
            />
          </View>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <DropdownPickerComponent items={userSelect} title="Members" />
      </SectionComponent>
    </Container>
  );
};

export default AddNewTaskScreen;

const styles = StyleSheet.create({});

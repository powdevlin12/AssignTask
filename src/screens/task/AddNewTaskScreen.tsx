import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Chart21, PasswordCheck, Trash, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DocumentPickerResponse} from 'react-native-document-picker';
import {TextComponent, TitleComponent} from '../../components/Text';
import {AttachmentFile} from '../../components/attachment';
import {ButtonComponent} from '../../components/button';
import {DatetimePickerComponent} from '../../components/date-picker';
import {DropdownPickerComponent} from '../../components/dropdown-picker';
import {InputComponent} from '../../components/input';
import {
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from '../../components/layout';
import theme from '../../constants/theme';
import {SelectModel} from '../../models';
import {TaskModel} from '../../models/TaskModel';
import {AppStackParamList} from '../../navigation/app.navigation';
import UserService from '../../services/users.service';
import lodash from '../../utils/lodash';

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

  const changeValueHandler = (
    key: keyof TaskModel,
    value: string | Date | string[],
  ) => {
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

  const [attachments, setAttachments] = useState<Array<DocumentPickerResponse>>(
    [],
  );

  const pickAttachmentsHandle =
    (attachmentsTask: Array<DocumentPickerResponse>) => () => {
      console.log('🚀 ~ AddNewTaskScreen ~ attachmentsTask:', attachmentsTask);
      setAttachments(attachmentsTask);
    };

  const removeAttachmentHandle = (index: number) => () => {
    const attachmentsCopy = [...attachments];
    attachmentsCopy.splice(index, 1);
    setAttachments(attachmentsCopy);
  };

  useEffect(() => {
    handleDataUserSelect();
  }, []);

  return (
    <Container>
      <ScrollView>
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
              lodash.isEmpty(taskDetail.dueDate)
                ? 'Choose due date of task'
                : ''
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
        <SectionComponent styles={{marginBottom: theme.size[2]}}>
          <DropdownPickerComponent
            items={userSelect}
            title="Members"
            multiple={true}
            selected={taskDetail.uids}
            onSelect={(val: string[]) => changeValueHandler('uids', val)}
          />
        </SectionComponent>

        <SectionComponent>
          <TitleComponent
            text="Attachments"
            size={theme.fontSize.paragraph}
            flex={0}
          />
          <SpaceComponent height={theme.size[3]} />
          <AttachmentFile pickDocumentsHandle={pickAttachmentsHandle} />
        </SectionComponent>
        {attachments.length > 0 && (
          <SectionComponent>
            {attachments.map((attachment, index) => {
              return (
                <RowComponent
                  key={attachment.uri}
                  justifyContent="space-between"
                  onPress={removeAttachmentHandle(index)}
                  styles={{margin: theme.size[2]}}>
                  <TextComponent text={attachment?.name ?? ''} />
                  <Trash size="26" color={theme.colors.danger} />
                </RowComponent>
              );
            })}
          </SectionComponent>
        )}
        <SectionComponent>
          <ButtonComponent title="Save" />
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default AddNewTaskScreen;

const styles = StyleSheet.create({});

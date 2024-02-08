import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Chart21, PasswordCheck, Trash, User} from 'iconsax-react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {FIRESTORAGE_COLLECTION} from '../../constants/firebase';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import TasksService from '../../services/tasks.service';

type Props = NativeStackScreenProps<AppStackParamList, 'AddNewTask'>;

const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
  fileUrls: [],
  id: '',
};

const AddNewTaskScreen = ({navigation}: Props) => {
  const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);
  const [userSelect, setUserSelect] = useState<SelectModel[]>([]);
  const [attachments, setAttachments] = useState<Array<DocumentPickerResponse>>(
    [],
  );
  const attachmentUrls = useRef<Array<string>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  // upload single file in storage firebase
  const uploadFileHandle = async (file: DocumentPickerResponse) => {
    try {
      const filename = file?.name ?? `file-${Date.now()}`;
      const path = `tasks/${filename}`;

      await storage()
        .ref(path)
        .putFile((file.fileCopyUri as string).replace('file://', ''));

      await storage()
        .ref(path)
        .getDownloadURL()
        .then(url => {
          const dataCopy = [...attachmentUrls.current];
          attachmentUrls.current = [...dataCopy, url];
        });
    } catch (error) {
      console.log('🚀 ~ uploadFileHandle ~ error:', error);
    }
  };

  // save task
  const saveTaskHandle = async () => {
    try {
      setIsLoading(true);
      for (const file of attachments) {
        await uploadFileHandle(file);
      }

      const data: TaskModel = {
        ...taskDetail,
        fileUrls: attachmentUrls.current,
        userCreated: auth().currentUser?.uid,
      };

      await TasksService.getInstance().addTask(data);
      Toast.showWithGravity(
        'Add task successfully !',
        Toast.SHORT,
        Toast.CENTER,
      );
      navigation.goBack();
    } catch (error) {
      console.log('🚀 ~ saveTaskHandle ~ error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleDataUserSelect();
  }, []);

  return (
    <Container haveHeader>
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
          <ButtonComponent
            title="Save"
            onPress={saveTaskHandle}
            isLoading={isLoading}
          />
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default AddNewTaskScreen;

const styles = StyleSheet.create({});

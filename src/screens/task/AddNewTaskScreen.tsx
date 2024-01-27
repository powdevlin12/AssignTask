import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppStackParamList} from '../../navigation/app.navigation';
import {TaskModel} from '../../models/TaskModel';

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

  return (
    <View>
      <Text>AddNewTaskScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewTaskScreen;

const styles = StyleSheet.create({});

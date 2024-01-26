import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppStackParamList} from '../../navigation/app.navigation';

type Props = NativeStackScreenProps<AppStackParamList, 'AddNewTask'>;

const AddNewTaskScreen = ({navigation}: Props) => {
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

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import AddNewTaskScreen from '../screens/task/AddNewTaskScreen';
import theme from '../constants/theme';
import React from 'react';

export type AppStackParamList = {
  Home: undefined;
  AddNewTask: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddNewTask"
        component={AddNewTaskScreen}
        options={{
          title: 'Add new task',
          headerStyle: {
            backgroundColor: theme.colors.bg,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: theme.fontFamilies.MontserratMedium,
            fontSize: theme.fontSize.tilte,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

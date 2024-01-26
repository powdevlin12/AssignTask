import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import AddNewTaskScreen from '../screens/task/AddNewTaskScreen';

export type AppStackParamList = {
  Home: undefined;
  AddNewTask: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddNewTask" component={AddNewTaskScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;

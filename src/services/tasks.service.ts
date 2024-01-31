import firestore from '@react-native-firebase/firestore';
import {FIRESTORAGE_COLLECTION} from '../constants/firebase';
import {TaskModel} from '../models/TaskModel';

class TasksService {
  private static instance: TasksService;

  public static getInstance(): TasksService {
    if (!TasksService.instance) {
      TasksService.instance = new TasksService();
    }
    return TasksService.instance;
  }

  async getAllTasks() {
    const allTask = (await firestore()
      .collection(FIRESTORAGE_COLLECTION.TASKS)
      .get()
      .then(querySnapshot => querySnapshot)) as TaskModel[];

    return allTask;
  }
}

export default TasksService;

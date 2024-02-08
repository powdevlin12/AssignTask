import firestore from '@react-native-firebase/firestore';
import {FIRESTORAGE_COLLECTION} from '../constants/firebase';
import {TaskModel} from '../models/TaskModel';
import {QuerySnapshot} from '@firebase/firestore-types';

class TasksService {
  private static instance: TasksService;

  public static getInstance(): TasksService {
    if (!TasksService.instance) {
      TasksService.instance = new TasksService();
    }
    return TasksService.instance;
  }
  /**
   ** This function is used to retrieve all tasks data from Firebase
   *@return TaskModel[]
   */
  async getAllTasks() {
    const allTask = (await firestore()
      .collection(FIRESTORAGE_COLLECTION.TASKS)
      .get()
      .then(querySnapshot => querySnapshot)) as TaskModel[];

    return allTask;
  }

  /**
   ** This function is used to add my tasks data to Firebase
   *@params data TaskModel
   *@return void
   */

  async addTask(data: TaskModel) {
    await firestore()
      .collection(FIRESTORAGE_COLLECTION.TASKS)
      .add(data)
      .then(() => {
        console.log('add task success !');
      });
  }

  /**
   ** This function is used to retrieve my tasks data from Firebase
   *@params uid number
   *@return TaskModel[]
   */
  async getMyTask(uid: string) {
    const tasks: TaskModel[] = [];
    await firestore()
      .collection(FIRESTORAGE_COLLECTION.TASKS)
      // Filter results
      .where(
        firestore.Filter.or(
          firestore.Filter('userCreated', '==', uid),
          firestore.Filter('uids', 'array-contains', uid),
        ),
      )
      .get()
      .then(querySnapshot =>
        querySnapshot.forEach(task => {
          tasks.push(task.data() as TaskModel);
        }),
      );

    return tasks;
  }
}

export default TasksService;

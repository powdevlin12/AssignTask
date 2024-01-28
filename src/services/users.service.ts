import firestore from '@react-native-firebase/firestore';
import {FIRESTORAGE_COLLECTION} from '../constants/firebase';
import {UserModel} from '../models/UserModel';

class UserService {
  private static instance: UserService;

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getAllUsers() {
    const allUser = (await firestore()
      .collection(FIRESTORAGE_COLLECTION.USERS)
      .get()
      .then(querySnapshot => querySnapshot)) as UserModel[];

    return allUser;
  }
}

export default UserService;

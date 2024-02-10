import {DocumentData, DocumentReference} from '@firebase/firestore-types';

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  start: Date;
  end: Date;
  uids: DocumentReference<DocumentData>[];
  color?: string;
  fileUrls?: string[];
  userCreated?: DocumentReference<DocumentData>;
  percent?: number;
  createdAt?: Date;
}

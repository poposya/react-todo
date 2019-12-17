import { BaseModel } from 'sjs-base-model';
import { TodoItemModel } from './TodoItemModel';

export class TodoModel extends BaseModel {
  id = 0;
  title = '';
  items = TodoItemModel;
}

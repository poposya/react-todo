import { BaseModel } from 'sjs-base-model';

export class TodoItemModel extends BaseModel {
  id = 0;
  label = '';
  checked = false;
}

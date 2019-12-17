import BaseReducer from '../../utilities/BaseReducer';
import TodosAction from './TodosAction';

export default class TodosReducer extends BaseReducer {
  initialState = {
    todos: [],
  };

  [TodosAction.REQUEST_TODOS_FINISHED](state, action) {
    return {
      ...state,
      todos: action.payload,
    };
  }
}

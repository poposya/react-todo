import ActionUtility from '../../utilities/ActionUtility';
import TodosEffect from './TodosEffect';

export default class TodosAction {
  static REQUEST_TODOS = 'TodosAction.REQUEST_TODOS';
  static REQUEST_TODOS_FINISHED = 'TodosAction.REQUEST_TODOS_FINISHED';

  static requestTodos() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(dispatch, TodosAction.REQUEST_TODOS, TodosEffect.requestTodos);
    };
  }
}

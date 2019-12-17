import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import RequestingReducer from './requesting/RequestingReducer';
import ErrorReducer from './error/ErrorReducer';
import ShowsReducer from './shows/ShowsReducer';
import ToastsReducer from './toasts/ToastsReducer';
import TodosReducer from './todos/TodosReducer';

export default (history) => {
  const reducerMap = {
    error: ErrorReducer.reducer,
    requesting: RequestingReducer.reducer,
    router: connectRouter(history),
    shows: new ShowsReducer().reducer,
    toasts: new ToastsReducer().reducer,
    todos: new TodosReducer().reducer,
  };

  return combineReducers(reducerMap);
};

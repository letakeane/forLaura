import { combineReducers } from 'redux';
import users from './users';
import quizReducers from './quizReducers';

const reducers = combineReducers({
  users,
  quizReducers
})

export default reducers;

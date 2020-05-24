import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { storyReducer } from './storyReducer';

const initialState = {};

const rootReducer = combineReducers({
  init: () => initialState,
  auth: authReducer,
  story: storyReducer,
});

export { rootReducer };

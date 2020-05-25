import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { storyReducer } from './storyReducer';
import { profileReducer } from './profileReducer';

const initialState = {};

const rootReducer = combineReducers({
  init: () => initialState,
  auth: authReducer,
  story: storyReducer,
  profile: profileReducer,
});

export { rootReducer };

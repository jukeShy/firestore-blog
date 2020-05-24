import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const initialState = {};

const rootReducer = combineReducers({
  init: () => initialState,
  auth: authReducer,
});

export { rootReducer };

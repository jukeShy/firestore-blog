import { combineReducers } from 'redux';

const initialState = {};

const rootReducer = combineReducers({
  init: () => initialState,
});

export { rootReducer };

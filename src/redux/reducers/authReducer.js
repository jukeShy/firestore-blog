import { USER_LOGIN } from '~redux/actions/authActions/types';
import {
  USER_LOGOUT,
  USER_REGISTER,
  FORM_SEND_TRUE,
  FORM_SEND_FALSE,
} from '../actions/authActions/types';

/* Возможно, хранить такую логику в редюсере стейта концептуально неверно */
const STORAGE_UID = 'STORAGE_UID';
const STORAGE_DISPLAY_NAME = 'STORAGE_DISPLAY_NAME';

const populateStorage = (uid, displayName) => {
  localStorage.setItem(STORAGE_UID, uid);
  localStorage.setItem(STORAGE_DISPLAY_NAME, displayName);
};

const clearStorage = () => {
  localStorage.removeItem(STORAGE_UID);
  localStorage.removeItem(STORAGE_DISPLAY_NAME);
};
/* ==================================================================== */

const initialState = {
  isFormSending: false,
  user: {
    uid: localStorage.getItem(STORAGE_UID),
    displayName: localStorage.getItem(STORAGE_DISPLAY_NAME),
  },
};

const authReducer = (state = initialState, { type, payload: user }) => {
  switch (type) {
    case USER_LOGIN:
    case USER_REGISTER:
      populateStorage(user.uid, user.displayName);
      return { ...state, user: { ...state.user, ...user } };
    case USER_LOGOUT:
      clearStorage();
      return { ...state, user: { uid: null, displayName: null } };
    case FORM_SEND_TRUE:
      return { ...state, isFormSending: true };
    case FORM_SEND_FALSE:
      return { ...state, isFormSending: false };
    default:
      return state;
  }
};

export { authReducer };

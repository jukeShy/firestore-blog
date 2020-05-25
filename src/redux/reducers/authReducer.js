import { USER_LOGIN } from '~redux/actions/authActions/types';
import {
  USER_LOGOUT,
  USER_REGISTER,
  FORM_SEND_TRUE,
  FORM_SEND_FALSE,
} from '../actions/authActions/types';
import { Storage } from '~/storage';

const initialState = {
  isFormSending: false,
  user: {
    uid: localStorage.getItem(Storage.STORAGE_UID),
  },
};

const authReducer = (state = initialState, { type, payload: user }) => {
  switch (type) {
    case USER_LOGIN:
    case USER_REGISTER:
      Storage.populateStorage(user.uid);
      return { ...state, user: { ...state.user, ...user } };
    case USER_LOGOUT:
      Storage.clearStorage();
      return { ...state, user: { uid: null } };
    case FORM_SEND_TRUE:
      return { ...state, isFormSending: true };
    case FORM_SEND_FALSE:
      return { ...state, isFormSending: false };
    default:
      return state;
  }
};

export { authReducer };

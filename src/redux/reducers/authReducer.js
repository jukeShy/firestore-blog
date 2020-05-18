import { USER_LOGIN } from '~redux/actions/authActions/types';

const initialState = {
  user: {
    uid: localStorage.getItem('STORAGE/uid'),
    displayName: localStorage.getItem('STORAGE/displayName'),
  },
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, user: { ...state.user, ...payload } };
    default:
      return state;
  }
};

export { authReducer };

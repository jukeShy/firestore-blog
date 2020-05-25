import { PROFILE_SET_NAME } from '~redux/actions/profileActions/types';
import { Storage } from '~/storage';

const initialState = {
  displayName: localStorage.getItem(Storage.STORAGE_DISPLAY_NAME),
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_SET_NAME:
      return { ...state, displayName: payload };
    default:
      return state;
  }
};

export { profileReducer };

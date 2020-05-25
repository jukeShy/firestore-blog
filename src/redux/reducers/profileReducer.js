import {
  PROFILE_SET_NAME,
  PROFILE_LOAGING_TRUE,
  PROFILE_LOAGING_FALSE,
  PROFILE_GET,
} from '~redux/actions/profileActions/types';
import { Storage } from '~/storage';

const initialState = {
  isLoading: true,
  currentProfile: {
    displayName: localStorage.getItem(Storage.STORAGE_DISPLAY_NAME),
  },
  profile: {
    displayName: '',
  },
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_SET_NAME:
      return {
        ...state,
        currentProfile: { ...state.currentProfile, displayName: payload },
      };
    case PROFILE_GET:
      return { ...state, profile: { ...payload } };
    case PROFILE_LOAGING_TRUE:
      return { ...state, isLoading: true };
    case PROFILE_LOAGING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export { profileReducer };

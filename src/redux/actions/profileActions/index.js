import { PROFILE_SET_NAME } from './types';
import { Storage } from '~/storage';

export const profileSetName = (name) => async (dispatch) => {
  try {
    Storage.populateName(name);
    dispatch({ type: PROFILE_SET_NAME, payload: name });
  } catch (error) {
    console.error();
  }
};

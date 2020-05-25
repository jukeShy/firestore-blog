import { auth, db } from '~firebase';

import {
  PROFILE_SET_NAME,
  PROFILE_GET,
  PROFILE_LOAGING_TRUE,
  PROFILE_LOAGING_FALSE,
} from './types';
import { Storage } from '~/storage';

export const profileSetName = (name) => async (dispatch) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      Storage.populateName(name);
      dispatch({ type: PROFILE_SET_NAME, payload: name });
      return;
    }

    await user.updateProfile({
      displayName: name,
    });

    const userRef = await db.collection('users').doc(user.uid);
    userRef.set({
      uid: user.uid,
      displayName: name,
    });

    Storage.populateName(name);
    dispatch({ type: PROFILE_SET_NAME, payload: name });
  } catch (error) {
    console.error(error);
  }
};

export const profileGet = (uid) => async (dispatch) => {
  try {
    dispatch(profileLoadingTrue());

    const userRef = await db.collection('users').doc(uid);
    const user = await userRef.get();

    dispatch({ type: PROFILE_GET, payload: user.data() });
    dispatch(profileLoadingFalse());
  } catch (error) {
    console.error(error);
    dispatch(profileLoadingFalse());
  }
};

export const profileLoadingTrue = () => (dispatch) =>
  dispatch({ type: PROFILE_LOAGING_TRUE });

export const profileLoadingFalse = () => (dispatch) =>
  dispatch({ type: PROFILE_LOAGING_FALSE });

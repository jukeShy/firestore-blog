import { auth, db } from '~firebase';

import { PROFILE_SET_NAME } from './types';
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

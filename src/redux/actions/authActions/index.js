import { auth } from '~firebase';
import { USER_LOGIN } from './types';

export const userLogin = (email, password) => async (dispatch) => {
  try {
    let { user } = await auth.signInWithEmailAndPassword(email, password);

    user = {
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Friend',
    };

    localStorage.setItem('STORAGE/uid', user.uid);
    localStorage.setItem('STORAGE/displayName', user.displayName);

    dispatch({
      type: USER_LOGIN,
      payload: { uid: user.uid, displayName: user.displayName },
    });
  } catch (error) {
    console.error(error);
  }
};

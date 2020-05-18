import { auth } from '~firebase';
import { USER_LOGIN, USER_LOGOUT } from './types';

export const userLogin = (email, password) => async (dispatch) => {
  try {
    let { user } = await auth.signInWithEmailAndPassword(email, password);

    user = {
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Friend',
    };

    dispatch({
      type: USER_LOGIN,
      payload: { uid: user.uid, displayName: user.displayName },
    });
  } catch (error) {
    console.error(error);
  }
};

export const userLogout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: USER_LOGOUT,
  });
};

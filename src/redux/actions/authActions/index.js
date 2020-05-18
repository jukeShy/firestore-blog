import { auth, db } from '~firebase';
import { USER_LOGIN, USER_LOGOUT, USER_REGISTER } from './types';

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

export const userRegister = (email, password) => async (dispatch) => {
  try {
    let { user } = await auth.createUserWithEmailAndPassword(email, password);

    user = {
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Friend',
    };

    const userRef = await db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      await userRef.set(user);
    }

    dispatch({
      type: USER_REGISTER,
      payload: { uid: user.uid, displayName: user.displayName },
    });
  } catch (error) {
    console.error(error);
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    await auth.signOut();

    dispatch({
      type: USER_LOGOUT,
    });
  } catch (error) {
    console.error(error);
  }
};

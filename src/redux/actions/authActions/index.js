import { auth, db } from '~firebase';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  FORM_SEND_TRUE,
  FORM_SEND_FALSE,
} from './types';
import { alert } from '~/alert';

export const userLogin = (email, password) => async (dispatch) => {
  dispatch(formSendTrue());
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

    dispatch(formSendFalse());
  } catch (error) {
    console.error(error);

    dispatch(formSendFalse());
    alert.createToast(error.message);
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

    alert.createToast(error.message);
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

export const formSendTrue = () => (dispatch) =>
  dispatch({ type: FORM_SEND_TRUE });

export const formSendFalse = () => (dispatch) =>
  dispatch({ type: FORM_SEND_FALSE });

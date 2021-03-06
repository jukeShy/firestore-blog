import { db, storage } from '~firebase';
import {
  STORY_CREATE,
  STORY_FETCH,
  STORY_LOADING_TRUE,
  STORY_LOADING_FALSE,
  STORY_SET,
} from './types';

export const storyCreate = (story) => async (dispatch, getState) => {
  let _story = {};
  const user = {
    uid: getState().auth.user.uid,
    displayName: getState().profile.currentProfile.displayName,
  };

  if (!story.image?.src || !story.image?.name) {
    _story.image = { name: null, src: null };
  } else {
    const storageRef = storage.ref(`images/${story.image.name}`);

    await storageRef.putString(story.image.src, 'data_url');
    const imageUrl = await storageRef.getDownloadURL();

    _story.image = {
      name: story.image.name,
      src: imageUrl,
    };
  }

  _story.user = user;
  _story.title = story.title;
  _story.body = story.body;

  const storyRef = await db.collection('stories').add(_story);

  dispatch({ type: STORY_CREATE, payload: { ..._story, id: storyRef.id } });
};

export const storyFetch = () => async (dispatch) => {
  try {
    const { docs } = await db.collection('stories').get();
    const stories = docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    dispatch({ type: STORY_FETCH, payload: stories });
    dispatch(storyLoadingFalse());
  } catch (error) {
    console.log(error);
  }
};

export const storySet = (story) => async (dispatch) => {
  dispatch({ type: STORY_SET, payload: story });
};

export const storyGet = (id) => async (dispatch, getState) => {
  const stories = getState().story.stories;

  if (!stories.length) {
    dispatch(storyLoadingTrue());

    const docRef = await db.collection('stories').doc(id);
    const doc = await docRef.get();

    dispatch(storySet({ ...doc.data(), id: doc.id }));

    return dispatch(storyLoadingFalse());
  }

  const story = stories.find((story) => story.id === id);
  dispatch(storySet(story));

  dispatch(storyLoadingFalse());
};

export const storyLoadingTrue = () => async (dispatch) =>
  dispatch({ type: STORY_LOADING_TRUE });

export const storyLoadingFalse = () => async (dispatch) =>
  dispatch({ type: STORY_LOADING_FALSE });

import { db, storage } from '~firebase';
import { STORY_CREATE, STORY_FETCH } from './types';

export const storyCreate = (story) => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  const storageRef = storage.ref(`images/${story.image.name}`);

  await storageRef.putString(story.image.src, 'data_url');
  const imageUrl = await storageRef.getDownloadURL();

  const _story = { ...story, userId, image: { ...story.image, src: imageUrl } };

  await db.collection('stories').add(_story);

  dispatch({ type: STORY_CREATE, payload: _story });
};

export const storyFetch = () => async (dispatch) => {
  try {
    const { docs } = await db.collection('stories').get();
    const stories = docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    dispatch({ type: STORY_FETCH, payload: stories });
  } catch (error) {
    console.log(error);
  }
};

import { db, storage } from '~firebase';
import { STORY_CREATE } from './types';

export const storyCreate = (story) => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  const storageRef = storage.ref(`images/${story.image.name}`);

  await storageRef.putString(story.image.src, 'data_url');
  const imageUrl = await storageRef.getDownloadURL();

  const _story = { ...story, userId, image: { ...story.image, src: imageUrl } };

  await db.collection('stories').add(_story);

  dispatch({ type: STORY_CREATE, payload: _story });
};

import { STORY_CREATE } from '~redux/actions/storyActions/types';
import { STORY_FETCH } from '../actions/storyActions/types';

const initialState = {
  stories: [],
};

const storyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORY_CREATE:
      return { ...state, stories: [...state.stories, payload] };
    case STORY_FETCH:
      return { ...state, stories: payload };
    default:
      return state;
  }
};

export { storyReducer };

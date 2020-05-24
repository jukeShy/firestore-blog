import { STORY_CREATE } from '~redux/actions/storyActions/types';
import {
  STORY_FETCH,
  STORY_LOADING_TRUE,
  STORY_LOADING_FALSE,
} from '../actions/storyActions/types';

const initialState = {
  isLoading: true,
  stories: [],
};

const storyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORY_CREATE:
      return { ...state, stories: [...state.stories, payload] };
    case STORY_FETCH:
      return { ...state, stories: payload };
    case STORY_LOADING_TRUE:
      return { ...state, isLoading: true };
    case STORY_LOADING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export { storyReducer };

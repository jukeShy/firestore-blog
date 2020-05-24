import { STORY_CREATE } from '~redux/actions/storyActions/types';
import {
  STORY_FETCH,
  STORY_LOADING_TRUE,
  STORY_LOADING_FALSE,
  STORY_SET,
} from '../actions/storyActions/types';

const initialState = {
  isLoading: true,
  stories: [],
  story: {},
};

const storyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORY_CREATE:
      return { ...state, stories: [...state.stories, payload] };
    case STORY_FETCH:
      return { ...state, stories: payload };
    case STORY_SET:
      return {
        ...state,
        story: payload,
      };
    case STORY_LOADING_TRUE:
      return { ...state, isLoading: true };
    case STORY_LOADING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export { storyReducer };

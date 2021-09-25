import { GET_POSTS_FAILED, GET_POSTS_SUCCESS } from '../actions/postActions';

const initialState = {
  posts: [],
  errors: [],
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
      };

    case GET_POSTS_FAILED:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

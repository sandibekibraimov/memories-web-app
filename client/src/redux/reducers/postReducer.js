import {
  GET_POSTS_FAILED,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_REQUEST,
  CREATE_POST_FAILED,
} from '../actions/postActions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case CREATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, payload],
      };

    case CREATE_POST_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

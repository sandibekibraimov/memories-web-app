import {
  GET_POSTS_FAILED,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_REQUEST,
  CREATE_POST_FAILED,
  UPDATE_POST_FAILED,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_REQUEST,
  DELETE_POST_FAILED,
  DELETE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  LIKED_POST_FAILED,
  LIKED_POST_SUCCESS,
  LIKED_POST_REQUEST,
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
    case CREATE_POST_REQUEST:
    case UPDATE_POST_REQUEST:
    case LIKED_POST_REQUEST:
    case DELETE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_POSTS_FAILED:
    case CREATE_POST_FAILED:
    case LIKED_POST_FAILED:
    case DELETE_POST_FAILED:
    case UPDATE_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, payload],
      };

    case UPDATE_POST_SUCCESS:
    case LIKED_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.map((post) =>
          post._id === payload._id ? payload : post
        ),
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((post) => post._id !== payload),
      };

    default:
      return state;
  }
};

import * as actions from '../constants/actionTypes.js';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_POSTS_REQUEST:
    case actions.CREATE_POST_REQUEST:
    case actions.UPDATE_POST_REQUEST:
    case actions.LIKED_POST_REQUEST:
    case actions.DELETE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actions.GET_POSTS_FAILED:
    case actions.CREATE_POST_FAILED:
    case actions.LIKED_POST_FAILED:
    case actions.DELETE_POST_FAILED:
    case actions.UPDATE_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case actions.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, payload],
      };

    case actions.UPDATE_POST_SUCCESS:
    case actions.LIKED_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.map((post) =>
          post._id === payload._id ? payload : post
        ),
      };

    case actions.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((post) => post._id !== payload),
      };

    default:
      return state;
  }
};

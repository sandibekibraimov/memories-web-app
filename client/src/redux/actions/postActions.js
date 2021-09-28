import axios from 'axios';
import * as actions from '../constants/actionTypes.js';

const BASE_URL = 'http://localhost:5000/api/posts';

// action creators
// fetching all posts
export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: actions.GET_POSTS_REQUEST,
  });

  try {
    const { data } = await axios.get(`${BASE_URL}`);

    dispatch({
      type: actions.GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.GET_POSTS_FAILED,
      payload: error,
    });
  }
};

//creating a new post

export const createPost = (post) => async (dispatch) => {
  dispatch({
    type: actions.CREATE_POST_REQUEST,
  });

  try {
    const { data } = await axios.post(`${BASE_URL}`, { post });
    dispatch({
      type: actions.CREATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.CREATE_POST_FAILED,
      payload: error,
    });
  }
};

// edit post
export const updatePost = (id, updatedPost) => async (dispatch) => {
  dispatch({
    type: actions.UPDATE_POST_REQUEST,
  });

  try {
    const { data } = await axios.patch(`${BASE_URL}/${id}`, updatedPost);

    dispatch({
      type: actions.UPDATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.UPDATE_POST_FAILED,
      payload: error,
    });
  }
};

// delete post by id
export const deletePost = (id) => async (dispatch) => {
  dispatch({
    type: actions.DELETE_POST_REQUEST,
  });

  try {
    await axios.delete(`${BASE_URL}/${id}`);

    dispatch({
      type: actions.DELETE_POST_SUCCESS,
      payload: id,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.DELETE_POST_FAILED,
      payload: error,
    });
  }
};

export const likePost = (id) => async (dispatch) => {
  dispatch({
    type: actions.LIKED_POST_REQUEST,
  });

  try {
    const { data } = await axios.patch(`${BASE_URL}/${id}/likePost`);

    dispatch({
      type: actions.LIKED_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.LIKED_POST_FAILED,
      payload: error,
    });
  }
};

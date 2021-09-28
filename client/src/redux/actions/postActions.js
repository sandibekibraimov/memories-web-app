import axios from 'axios';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILED = 'UPDATE_POST_FAILED';

const BASE_URL = 'http://localhost:5000/api/posts';

// action creators
// fetching all posts
export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POSTS_REQUEST,
  });

  try {
    const { data } = await axios.get(`${BASE_URL}`);

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAILED,
      payload: error,
    });
  }
};

//creating a new post

export const createPost = (post) => async (dispatch) => {
  dispatch({
    type: CREATE_POST_REQUEST,
  });

  try {
    const { data } = await axios.post(`${BASE_URL}`, { post });
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAILED,
      payload: error,
    });
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  dispatch({
    type: UPDATE_POST_REQUEST,
  });

  try {
    const { data } = await axios.patch(`${BASE_URL}/${id}`, updatedPost);

    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_POST_FAILED,
      payload: error,
    });
  }
};

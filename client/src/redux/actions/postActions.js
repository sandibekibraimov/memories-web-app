import axios from 'axios';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED';

const BASE_URL = 'http://localhost:5000';

// action creators
// fetching all posts
export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POSTS_REQUEST,
  });

  try {
    const { data } = await axios.get(`${BASE_URL}/api/posts`);

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
    const { data } = await axios.post(`${BASE_URL}/api/posts`, { post });
    console.log('post!!!', data);
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

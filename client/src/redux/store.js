import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { postReducer } from './reducers/postReducer';

const reducers = combineReducers({
  posts: postReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, middleware);

export default store;


import reducer from './reducer.js' ;

import { createStore,applyMiddleware  } from 'redux';

import thunk from 'redux-thunk';//中间件

//只能有一个store
const store=createStore(reducer,applyMiddleware(thunk));

export default store;
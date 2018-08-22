
import reducer from './reducer.js' ;

import { createStore,applyMiddleware  } from 'redux';
//中间件来处理调试信息
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';//中间件来处理派送函数

const middleware=[thunk];//添加多个中间件使用数组

if(process.env.NODE_ENV != 'production'){
	const logger = createLogger({});//调用
	middleware.push(logger);
}

//只能有一个store
const store=createStore(reducer,applyMiddleware(...middleware));


export default store;
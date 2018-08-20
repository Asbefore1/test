
import reducer from './reducer.js' ;

import { createStore } from 'redux';
//只能有一个store
const store=createStore(reducer);

export default store;
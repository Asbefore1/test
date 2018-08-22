
//reduce是一个函数,注意点：
//1.并且reducer是一个纯函数(给固定的输入,就会有固定的输出,并且不能改变参数)
//2.reducer负责处理逻辑但不改变数据,数据的改变由store负责
//3.action中的type在整个应用中必须唯一
import * as types from './actionTypes.js';
const { fromJS } = require('immutable');//解决效率问题

const defaultState=fromJS({
	value:'hi',
	list:['ccc','ddd']
})

export default (state=defaultState,action)=>{
	if(action.type==types.CHANGE_VALUE){
		//深拷贝
		/*
		const NewState=JSON.parse(JSON.stringify(state));
		NewState.value=action.payload;

		return NewState
		*/
		return state.set('value',action.payload)
	}

	if(action.type==types.ADD_ITEM){

		/*
		const NewState=JSON.parse(JSON.stringify(state));

		NewState.list.push(state.value);
		NewState.value=''
		return NewState//return之后就结束了本次执行,不会再往下走了
		*/
		const NewList=[...state.get('list'),state.get('value')];
		return state .merge({
			list:NewList,
			value:''
		})
	}

	if(action.type==types.DELETE_ITEM){
		/*
		const NewState=JSON.parse(JSON.stringify(state));

		NewState.list.splice(action.payload,1);

		return NewState//return之后就结束了本次执行,不会再往下走了
		*/
		const NewList=[...state.get('list')];
		NewList.splice(action.payload,1);
		return state.set('list',NewList)
	}

	if(action.type==types.LOAD_INIT_DATA){
		/*
		const NewState=JSON.parse(JSON.stringify(state));

		NewState.list=action.payload;

		return NewState//return之后就结束了本次执行,不会再往下走了
		*/
		return state.set('value',action.payload)
	}


	return state
}
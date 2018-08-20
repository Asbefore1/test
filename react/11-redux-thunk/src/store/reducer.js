

//reduce是一个函数,注意点：
//1.并且reducer是一个纯函数(给固定的输入,就会有固定的输出,并且不能改变参数)
//2.reducer负责处理逻辑但不改变数据,数据的改变由store负责
//3.action中的type在整个应用中必须唯一
import { CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA } from './actionTypes.js';
const defaultState={

	value:'hi',
	list:['ccc','ddd']
}

export default (state=defaultState,action)=>{
	if(action.type==CHANGE_VALUE){
		//深拷贝

		// const NewState=state;//浅拷贝(这样就是改变了参数)
		const NewState=JSON.parse(JSON.stringify(state));

		/*
		纯函数中不能有系统时间,随机数等不固定的值
		NewState.value=new Date();
		NewState.value=Math.random();
		*/

		NewState.value=action.payload;

		return NewState//return之后就结束了本次执行,不会再往下走了
	}

	if(action.type==ADD_ITEM){

		const NewState=JSON.parse(JSON.stringify(state));

		NewState.list.push(state.value);
		NewState.value=''

		return NewState//return之后就结束了本次执行,不会再往下走了
	}

	if(action.type==DELETE_ITEM){

		const NewState=JSON.parse(JSON.stringify(state));

		NewState.list.splice(action.payload,1);

		return NewState//return之后就结束了本次执行,不会再往下走了
	}

	if(action.type==LOAD_INIT_DATA){

		const NewState=JSON.parse(JSON.stringify(state));

		NewState.list=action.payload;

		return NewState//return之后就结束了本次执行,不会再往下走了
	}


	return state
}
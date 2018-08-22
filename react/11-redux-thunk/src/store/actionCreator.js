import axios from 'axios';

import { CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA } from './actionTypes.js';

export const changeValueAction=(payload)=>{

	return{
		type:CHANGE_VALUE,
		// payload:payload  //参数一样时可以省略
		payload
	} 
}
export const addItemAction=()=>{
	return {
		type:ADD_ITEM
	}
}
export const deleteItemAction=(payload)=>{
	return {
		type:DELETE_ITEM,
		payload
	}
}
//发送ajax请求用到的
export const loadInitDataAction=(payload)=>{
	return {
		type:LOAD_INIT_DATA,
		payload
	}
}
export const getInitDataAction=()=>{
	return (dispatch)=>{
		axios
		.get('http://127.0.0.1:3001/')
		.then((data)=>{
			// console.log(data)
			const action=loadInitDataAction(data.data)
			dispatch(action)
		})
	}
}
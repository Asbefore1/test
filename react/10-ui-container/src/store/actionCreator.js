import { CHANGE_VALUE,ADD_ITEM,DELETE_ITEM } from './actionTypes.js';

export const changeValueAction=(payload)=>{

	return{//生成action返回给app,app再派送给store
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
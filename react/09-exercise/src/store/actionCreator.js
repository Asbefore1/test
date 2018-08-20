import { CHANGE_VALUE,ADD_ITEM,DELETE_ITEM } from './actionTypes.js';

export const handleChangeAction=(payload)=>{
	return {
		type:CHANGE_VALUE,
		payload
	}
}
import { CHANGE_VALUE,ADD_ITEM,DELETE_ITEM } from './actionTypes.js';

const defaultState={
	value:'hi',
	list:['ccc','ddd']
}
export default (state=defaultState,action)=>{

	if(action.type==CHANGE_VALUE){
		//深拷贝
		const NewState=JSON.parse(JSON.stringify(state));
		NewState.value=action.payload;
		return NewState;	
	}

	if(action.type==ADD_ITEM){
		//深拷贝
		const NewState=JSON.parse(JSON.stringify(state));
		NewState.list.push(state.value);
		NewState.value=''
		return NewState;	
	}

	if(action.type==DELETE_ITEM){
		//深拷贝
		const NewState=JSON.parse(JSON.stringify(state));
		NewState.list.splice(action.payload,1);
		return NewState;	
	}


	return state
}
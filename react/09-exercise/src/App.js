import React,{ Component,Fragment } from 'react';
import store from './store/index.js';
//引入css
import './App.css';

import AppUI from './store/AppUI.js';



import  { handleChangeAction,handleAddAction,handleDeleteAction,getInitDataAction } from './store/actionCreator.js';


//定义组件
//必须继承React.Component,Component是react上的一个方法
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			value:'',
			list:['aa','bb']
		}
		this.state=store.getState();
		
		this.handleChange=this.handleChange.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
		this.handledelete=this.handledelete.bind(this);

		//接收修改成功的数据
		store.subscribe(() =>
		  this.setState(store.getState())
		)
	}

	handleChange(e){
		const action=handleChangeAction(e.target.value)
		//派送
		store.dispatch(action)
	}

	handleAdd(){
		const action=handleAddAction()
		store.dispatch(action)
	}

	handledelete(index){
		const action=handleDeleteAction(index)
		store.dispatch(action)
	}

	componentDidMount(){
		// axios
		// .get('http://127.0.0.1:3001/')
		// .then((data)=>{
		// 	const action=loadInitDataAction(data.data)
		// 	store.dispatch(action)
		// })
		// .catch((err)=>{
		// 	console.log('err...',err)
		// })

		const action=getInitDataAction()
		store.dispatch(action)
	}

	render(){
		return(
			<AppUI
				value={this.state.value}
				list={this.state.list}
				handleChange={this.handleChange}
				handleAdd={this.handleAdd}
				handledelete={this.handledelete}
			/>
		)
	}
}

//导出组件==module.exports==App
export default App;
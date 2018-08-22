import React,{ Component,Fragment } from 'react';

import { changeValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionCreator.js';

import store from './store/index.js'; 	

import AppUI from './store/AppUI.js';

//引入css
import './App.css';


//定义组件
//必须继承React.Component,Component是react上的一个方法
//处理业务逻辑的组件-UI组件
//如果一个组件只有一个render方法的话,这个组件也叫做无状态组件
//无状态组件可以只写一个方法
class App extends Component{
	
	constructor(props){
		super(props);
		this.state={
			value:'hello',
			list:['aa','bb']
		}
		this.state=store.getState()
		// console.log(store.getState())

		//subscribe的作用在于当store里的state发生改变也就是修改值成功后,
		//又调用store里面的getState(),拿到修改后的值
		//使用setState把组件里的值进行更新,引起页面的渲染
		store.subscribe(()=>{
			this.setState(store.getState())//store.getState()作为一个参数传进来
		})
		this.handleChange=this.handleChange.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
	}

	handleChange(e){
		//1.定义要修改什么
		//2.定义修改成什么
		const action=changeValueAction(e.target.value);

		//将要修改的数据派送给store
		store.dispatch(action)
	}

	handleAdd(){
		const action=addItemAction();

		//将要修改的数据派送给store
		store.dispatch(action)
	}

	handleDelete(index){
		const action=deleteItemAction(index)

		//将要修改的数据派送给store
		store.dispatch(action)
	}

	componentDidMount(){
		/*
		axios
		.get('http://127.0.0.1:3001/')
		.then((data)=>{
			// console.log(data)
			const action=loadInitDataAction(data.data)
			store.dispatch(action)
		})
		.catch((err)=>{
			console.log('err...',err)
		})
		*/
		//action现在是一个函数
		const action=getInitDataAction();
		//当action作为一个函数传到dispatch中时,就会把dispatch自身再返回到函数中作为参数
		store.dispatch(action)
	}


	render(){
		return(
			<AppUI
				value={this.state.value}
				list={this.state.list}
				handleChange={this.handleChange}
				handleAdd={this.handleAdd}
				handleDelete={this.handleDelete}
			/>
		)
	}
}

//导出组件==module.exports==App
export default App;
import React,{ Component,Fragment } from 'react';

//引入css
import './App.css';

import Item from './Item.js';

import axios from 'axios';

//定义组件
//必须继承React.Component,Component是react上的一个方法
class App extends Component{
	//必须有一个render方法

	//构造函数
	constructor(props){
		super(props);
		//初始化state,state代表当前页面中的数据
		this.state={
			value:'',
			list:[]
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
		// console.log(this.state)
	}
	/*
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('App getDerivedStateFromProps',nextProps, prevState)
		return {
			list:1
		}
	};
	*/
	
	componentDidMount(){
		axios.get('/')
		.then((res)=>{
			console.log('res...')
		})
		.catch((e)=>{
			console.log('err...')
		})
	}
	
	/*
	shouldComponentUpdate(nextProps, nextState){
		
	}
	*/	
	handleAdd(){
		//setState是一个异步方法,先执行第一个函数,等系统监测到完成更新DOM之后去执行第二个函数
		this.setState((preState)=>({//preState是this.state(初始化)
			list:[...preState.list,preState.value],
			value:'',
		}),()=>{
			// console.log(this.ul.querySelectorAll('li'))
		})
	}


	handleChange(e){
		// console.log(this.input)//拿到input框
		const value=this.input.value;//通过DOM节点拿到input框
		this.setState((preState)=>({
			value//如果赋值的名字和值的名字相同,就可以只写一个
		}))
		
	}

	//单向数据流:父组件可以向子组件传值,但子组件不能改变父组件的值
	handleDelete(index){
		this.setState((preState)=>{
			const list=[...preState.list];
			list.splice(index,1); //但会截取之后的数组
			//state规定要求返回对象
			return {
				list:list
			}
		})	
		
	}
	
	getItems(){
		//函数外面的this是App,里面的this如果不bind的话是undefined
		return this.state.list.map((item,index)=>{//map函数 //item是数组中的值,index是下标
			{/*父组件向子组件传递数据*/}
			return( //  <Item/>相当于调用item.js
				<Item 
					key={index} //为了消除系统默认提示的错误
					content={item} 
					index={index}
					data={this.handleDelete}
					// test='hahaha'
				/> 
			)				
		})
	}

	render(){//渲染(相当于调用)注意:setState执行,render就执行,子组件的render就执行
		console.log('App render...')
		return(
			<div className='box'>	
				<input 
					value={this.state.value} 
					onChange={this.handleChange}  
					ref={(input)=>{
						this.input=input;
					}}
				/>
				<button onClick={this.handleAdd}>提交</button>
				<ul 
					ref={(ul)=>{
						this.ul=ul;
					}}
				>
					{	
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}

//导出组件==module.exports==App
export default App;
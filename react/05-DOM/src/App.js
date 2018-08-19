import React,{ Component,Fragment } from 'react';

//引入css
import './App.css';

import Item from './Item.js';

import axios from 'axios';//发送Ajax请求使用

//定义组件
//必须继承React.Component,Component是react上的一个方法
class App extends Component{
	//必须有一个render方法

	//构造函数(自动执行),只在组件被创建的时候去执行,创建之后就不会再执行了
	constructor(props){
		console.log('APP constructor....')
		super(props);//父组件的props没有内容
		//初始化state,state代表当前页面中的数据
		this.state={
			value:'',
			list:['aa']
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
		// console.log(this.state)
	}

	/*
	static getDerivedStateFromProps(nextProps, prevState){//nextProps在此时是空对象,prevState相当于state,里面有value和list
		console.log('App getDerivedStateFromProps',nextProps, prevState)
		return {//根据返回的对象去渲染页面
			list:['bb','sss']
		}
	}
	*/
	
	// //应不应该更新
	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('App shouldComponentUpdate',nextProps,nextState)
	// 	return true;//如果是false,就不走render了
	// }
	// //即将更新
	// getSnapshotBeforeUpdate(prevProps, prevState){
	// 	console.log('App getSnapshotBeforeUpdate',prevProps,prevState)
	// 	return 111
	// }
	// //更新完成
	// componentDidUpdate(prevProps, prevState,snapshot){
	// 	console.log('App componentDidUpdate',prevProps, prevState,snapshot)
	// }

	// 挂载完成
	componentDidMount(){
		//发送Ajax请求
		axios
		.get('http://127.0.0.1:3001/api/getData')//语法如下(比较像promise)
		.then((data)=>{
			console.log(data)
			this.setState({
				list:data.data
			})
		})
		.catch((err)=>{
			console.log('err...',err)
		})
		
		// console.log('APP componentDidMount...')
	}
	
	
	
		

	handleAdd(){
		//setState是一个异步方法,先执行第一个函数,等系统监测到完成更新DOM之后去执行第二个函数
		this.setState((preState)=>({//preState是this.state(初始化)
			list:[...preState.list,preState.value],
			value:'',
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))
		})
	}


	handleChange(e){
		// console.log(this.input)//拿到input框
		// const value=e.target.value;
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
			return( //  <Item />相当于调用item.js
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
					//虚拟DOM,接收一个函数,函数接收一个参数,参数代表了当前的DOM节点,在这里指的就是input框
					ref={(input)=>{
						// console.log(input)
						//将input属性赋给APP上的属性,即APP上有input这个属性
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
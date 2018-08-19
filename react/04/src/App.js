import React,{ Component,Fragment } from 'react';

//引入css
import './App.css';

import Item from './Item.js';
import Test from './Test.js';



{/*我是多行注释*/}
{
	//我是单行注释
}


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
			list:['aaaa','bbb','ccc']//初始化Item打印几次与初始值有几个有关
		};
		// console.log('1::',this)
		this.handleChange=this.handleChange.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
	}


	handleAdd(){
		// console.log(this.state)//{value: ""}
		/*
		this.setState({
			list:[...this.state.list,this.state.value],
			value:''
		})
		*/
		this.setState((preState)=>({
			list:[...preState.list,preState.value],//将框里的值拿出来放到list中
			value:''
		}))
		// console.log('2::',this)
	}

	handleChange(e){
		// console.log(e.target)//拿到input框
		// console.log(e.target.value)//拿到input框里的值
		/*
		this.setState({
			value:e.target.value
		})
		*/
		const value=e.target.value;
		this.setState((preState)=>({
			value:value//如果赋值的名字和值的名字相同,就可以只写一个			
		}))
	}

	//单向数据流:父组件可以向子组件传值,但子组件不能改变父组件的值
	handleDelete(index){
		/*
		const list=[...this.state.list];//...扩展运算符
		list.splice(index,1);//splice是index从哪个下标开始截取,1代表截取几个,然后返回被删除的数组
		//返回被删除的数组在这里没有接收
		this.setState({
			list:list
		})
		*/
		this.setState((preState)=>{
			const list=[...this.state.list];
			list.splice(index,1);
			return{
				list
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
					test='hahah'
				/>
			)				
		})
	}

	render(){//渲染(相当于调用)注意:setState执行,render就执行,子组件的render就执行
		console.log('App render...')
		return(
			<div className='box'>	
				<input value={this.state.value} onChange={this.handleChange}  />
				<button onClick={this.handleAdd}>提交</button>
				<ul>
					{	
						this.getItems()
					}
				</ul>
				<Test />
			</div>
		)
	}
}

//导出组件==module.exports==App
export default App;
import React,{ Component,Fragment } from 'react';

//引入css
import './App.css';

//定义组件
//必须继承React.Component,Component是react上的一个方法
class App extends Component{
	//必须有一个render方法

	constructor(props){
		super(props);
		//初始化state,state代表当前页面中的数据
		this.state={
			value:'',
			list:['aaa','bbb']
		}
	}

	handleAdd(){
		// console.log(this.state)//{value: ""}
		this.setState({
			list:[...this.state.list,this.state.value],//...扩展运算符
			value:''
		})
	}

	handleChange(e){
		// console.log(e.target)//拿到input框
		// console.log(e.target.value)//拿到input框里的值
		this.setState({
			value:e.target.value
		})
	}

	handleDelete(index){
		const list=[...this.state.list];
		list.splice(index,1);
		this.setState({
			list:list
		})
	}
		

	render(){
		return(
			<div className='box'>
			{/*我是多行注释*/}
			{
				//我是单行注释
			}
				<input value={this.state.value} onChange={this.handleChange.bind(this)}  />{/*改变this的指向*/}
				<button onClick={this.handleAdd.bind(this)}>提交</button>
				<ul>
					{
						this.state.list.map((item,index)=>{//map函数
							return(
								<li 
									onClick={this.handleDelete.bind(this,index)}//index下标
									key={index}
								>
									{item}
								</li>
							)				
						})
					}
				</ul>
			</div>
		)
	}
}

//导出组件==module.exports==App
export default App;
import React,{ Component } from 'react';

import store from './store/index.js'; 	


//引入css
import './App.css';

import { Input,Button,Row,Col,List } from 'antd';//先引入再使用



//定义组件
//必须继承React.Component,Component是react上的一个方法
class App extends Component{
	
	constructor(props){
		super(props);
		/*
		this.state={
			value:'hello',
			list:['aa','bb']
		}
		*/
		// console.log(store.getState())
		// console.log(store)
		this.state=store.getState()
		
		//subscribe的作用在于当store里的state发生改变也就是修改值成功后,告诉组件修改成功了,在组件中接收到修改的值
		store.subscribe(()=>{//setState是App上的方法
			this.setState(store.getState())//store.getState()作为一个参数传进来
		})

		this.handleChange=this.handleChange.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
	}

	handleChange(e){
		//1.定义要修改什么
		//2.定义修改成什么
		const action={
			type:'change_value',
			payload:e.target.value
		}

		//将要修改的数据派送给store
		store.dispatch(action)
	}

	handleAdd(){
		const action={
			type:'add_item',//添加不需要写第二个参数,也就是不需要写添加到什么地方
		}

		//将要修改的数据派送给store
		store.dispatch(action)
	}

	handleDelete(index){
		const action={
			type:'delete_item',
			payload:index
		}

		//将要修改的数据派送给store
		store.dispatch(action)
	}

	render(){
		return(//return只能返回一个,div外面的都是js代码,div里面的都是html代码,这种语法是JSX语法
			<div className='App'>
				<Row>
			      	<Col span={6}>
			      		<Input 
			      			value={this.state.value}
			      			onChange={this.handleChange}
			      		/>
			      	</Col>
			      	<Col span={6}>
			      		<Button 
			      			type="primary"
			      			onClick={this.handleAdd}
			      		>提交
			      		</Button>
			      	</Col>			     		       
			    </Row>
			   	<Col span={6}>
		      		<List
		    			style={{ marginTop: 20 }}
		      			bordered
		      			dataSource={this.state.list}
		      			renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
		    		/>
			    </Col>	
			</div>
		)
	}
}

//导出组件==module.exports==App
export default App;
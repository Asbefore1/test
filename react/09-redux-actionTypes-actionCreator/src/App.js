import React,{ Component,Fragment } from 'react';

import { changeValueAction,addItemAction,deleteItemAction } from './store/actionCreator.js';

import store from './store/index.js'; 	

//引入css
import './App.css';

import { Input,Button,Row,Col,List } from 'antd';//先引入再使用



//定义组件
//必须继承React.Component,Component是react上的一个方法
class App extends Component{
	
	constructor(props){
		super(props);
		this.state={
			value:'hello',
			list:['aa','bb']
		}
		this.state=store.getState()
		// console.log(store.getState())

		//在组件中接收到修改的值
		//当store里
		store.subscribe(()=>{
			this.setState(store.getState())//store.getState()作为一个参数传进来
		})
		this.handleChange=this.handleChange.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
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

	render(){
		return(
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
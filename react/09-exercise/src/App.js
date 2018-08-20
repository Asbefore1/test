import React,{ Component,Fragment } from 'react';
import store from './store/index.js';
//引入css
import './App.css';

import { Input,Button,Row,Col,List } from 'antd';//先引入

import './store/actionCreator.js';


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
		const action={
			//不用告诉修改到哪个地方
			type:ADD_ITEM
		}
		store.dispatch(action)
	}

	handledelete(index){
		const action={
			type:DELETE_ITEM,
			payload:index
		}
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
		      			renderItem={(item,index) => (<List.Item onClick={this.handledelete.bind(this,index)}>{item}</List.Item>)}
		    		/>
			    </Col>	
			</div>
		)
	}
}

//导出组件==module.exports==App
export default App;
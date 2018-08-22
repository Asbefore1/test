import React,{ Component } from 'react';
import { Input,Button,Row,Col,List } from 'antd';
//connect是让指定的组件和store连接
import { connect } from 'react-redux';

//引入css
import './App.css';
import { changeValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionCreator.js';


//定义组件
//必须继承React.Component,Component是react上的一个方法
//处理业务逻辑的组件-UI组件
//如果一个组件只有一个render方法的话,这个组件也叫做无状态组件
//无状态组件可以只写一个方法
class App extends Component{

	componentDidMount(){
		this.props.handleInit();
	}


	render(){
		return(
			<div className='App'>
				<Row>
			      	<Col span={6}>
			      		<Input 
			      			value={this.props.value}
			      			onChange={this.props.handleChange}
			      		/>
			      	</Col>
			      	<Col span={6}>
			      		<Button 
			      			type="primary"
			      			onClick={this.props.handleAdd}
			      		>提交
			      		</Button>
			      	</Col>			     		       
			    </Row>
			   	<Col span={6}>
		      		<List
		    			style={{ marginTop: 20 }}
		      			bordered
		      			dataSource={this.props.list}
		      			renderItem={(item,index) => (<List.Item onClick={()=>this.props.handleDelete(index)}>{item}</List.Item>)}
		    		/>
			    </Col>	
			</div>
		)
	}
}

//将state映射到props上
const mapStateToProps=(state)=>{
	console.log(state)
	return{
		value:state.value,
		list:state.list
	}
}

const mapDispatchToProps=(dispatch)=>{
	// console.log(dispatch)
	return{
		handleChange:(e)=>{
			const action=changeValueAction(e.target.value);
			dispatch(action)
		},
		handleAdd:()=>{
			const action=addItemAction();
			dispatch(action)
		},
		handleDelete:(index)=>{
			const action=deleteItemAction(index);
			dispatch(action)
		},
		handleInit:(data)=>{
			const action=getInitDataAction();
			dispatch(action)
		}
	}
}

//connect是让指定的组件和store连接
//connect接收两个参数,connect方法返回一个函数，这个函数接收的就是App组件的html,也就是UI组件
export default connect(mapStateToProps,mapDispatchToProps)(App);
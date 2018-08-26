import React,{ Component } from 'react';
import { Input,Button,Row,Col,List } from 'antd';
//connect是让指定的组件和store连接
import { connect } from 'react-redux';

//引入css
import './App.css';
import { changeValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionCreator.js';


//定义组件
//必须继承React.Component,Component是react上的一个方法
//如果一个组件只有一个render方法的话,这个组件也叫做无状态组件
//无状态组件可以只写一个方法

//处理业务逻辑的组件-UI组件
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

//App是provider的子组件,映射到props上
//把store里面的(state映射到组件的props)上
const mapStateToProps=(state)=>{//state就是store从reducer那拿过来的数据
	// console.log(state)
	return{//期望返回一个对象
		value:state.value,
		list:state.list
	}
}


//把派发action的方法映射到组件的props上
const mapDispatchToProps=(dispatch)=>{
	//dispatch是一个函数
	// console.log(dispatch)
	return{//把函数映射到props上,return期望返回一个对象
		handleChange:(e)=>{
			const action=changeValueAction(e.target.value);
			dispatch(action)//把action放到dispatch函数中,相当于调用dispatch函数,并传进来了一个action参数
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
//容器组件
//connect是让指定的组件和store连接
//第一个函数是做映射
//connect接收两个参数函数,connect方法返回一个函数，这个函数接收的就是App组件的html,也就是UI组件
export default connect(mapStateToProps,mapDispatchToProps)(App);
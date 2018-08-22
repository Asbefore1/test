import { Input,Button,Row,Col,List } from 'antd';//先引入再使用

import React,{ Component } from 'react';
//如果一个组件只有一个render方法的话，这个组件也叫做无状态组件
//UI组件只负责UI展示（html页面展示，子组件）

// class AppUI extends Component{
// 	render(){
// 		return (
// 			<div className='App'>
// 				<Row>
// 			      	<Col span={6}>
// 			      		<Input 
// 			      			value={this.props.value}
// 			      			onChange={this.props.handleChange}
// 			      		/>
// 			      	</Col>
// 			      	<Col span={6}>
// 			      		<Button 
// 			      			type="primary"
// 			      			onClick={this.props.handleAdd}
// 			      		>提交
// 			      		</Button>
// 			      	</Col>			     		       
// 			    </Row>
// 			   	<Col span={6}>
// 		      		<List
// 		    			style={{ marginTop: 20 }}
// 		      			bordered
// 		      			dataSource={this.props.list}
						{/*将render单独拿出来时,handledelete去掉bind(this),将其改为一个函数,且不传参,因为前面的空括号里面默认是event*/}
// 		      			renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
// 		    		/>
// 			    </Col>	
// 			</div>
// 		)
// 	}	
// }
const AppUI=(props)=>{//接收一个参数props也就是父组件向子组件传数据的props,不需要继承Component,并且不需要render,直接return出去就可以
	return (
		<div className='App'>
			<Row>
		      	<Col span={6}>
		      		<Input 
		      			value={props.value}
		      			onChange={props.handleChange}
		      		/>
		      	</Col>
		      	<Col span={6}>
		      		<Button 
		      			type="primary"
		      			onClick={props.handleAdd}
		      		>提交
		      		</Button>
		      	</Col>			     		       
		    </Row>
		   	<Col span={6}>
	      		<List
	    			style={{ marginTop: 20 }}
	      			bordered
	      			dataSource={props.list}
	      			renderItem={(item,index) => (<List.Item onClick={()=>{props.handleDelete(index)}}>{item}</List.Item>)}
	    		/>
		    </Col>	
		</div>
	)
}

export default AppUI;

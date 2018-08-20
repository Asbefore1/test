import { Input,Button,Row,Col,List } from 'antd';//先引入再使用

import React,{ Component } from 'react';

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
						{/*将render单独拿出来时,handledelete去掉bind(this),将其改为一个函数,且不传参*/}
// 		      			renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
// 		    		/>
// 			    </Col>	
// 			</div>
// 		)
// 	}	
// }
const AppUI=(props)=>{
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

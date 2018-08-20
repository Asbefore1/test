import React,{ Component,Fragment } from 'react';

import { Input,Button,Row,Col,List } from 'antd';//先引入

// class AppUI extends Component{

// 	render(){
// 		return (
// 			<div className='App'>
// 				<Row>
// 			      	<Col span={6}>
// 				      	<Input 
// 				      		value={this.props.value} 
// 				      		onChange={this.props.handleChange} 
// 				      	/>
// 			      	</Col>
// 			      	<Col span={6}>
// 				      	<Button 
// 				      		type="primary"
// 				      		onClick={this.props.handleAdd}
// 				      	>提交
// 				      	</Button>
// 				    </Col>			     		       
// 			    </Row>
// 			   	<Col span={6}>
// 		      		<List
// 		    			style={{ marginTop: 20 }}
// 		      			bordered
// 		      			dataSource={this.props.list}		      			
// 		      			renderItem={(item,index) => (<List.Item onClick={()=>this.props.handledelete(index)}>{item}</List.Item>)}
// 		    		/>
// 			    </Col>	
// 			    {
// 			    	//将render单独拿出来时,handledelete去掉bind(this),将其改为一个函数,且不传参
// 			    }		    
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
	      			renderItem={(item,index) => (<List.Item onClick={()=>props.handledelete(index)}>{item}</List.Item>)}
	    		/>
		    </Col>	
		    {
		    	//将render单独拿出来时,handledelete去掉bind(this),将其改为一个函数,且不传参
		    }		    
		</div>
	)
}

export default AppUI;
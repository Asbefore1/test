import React,{ Component,Fragment } from 'react';

//引入css
import './App.css';

import { Input,Button,Row,Col,List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

//定义组件
//必须继承React.Component,Component是react上的一个方法
class App extends Component{
	
	render(){
		return(
			<div className='App'>
				<Row>
			      	<Col span={6}><Input  /></Col>
			      	<Col span={6}><Button type="primary">提交</Button></Col>			     		       
			    </Row>
			   	<Col span={6}>
		      		<List
		    			style={{ marginTop: 20 }}
		      			bordered
		      			dataSource={data}
		      			renderItem={item => (<List.Item>{item}</List.Item>)}
		    		/>
			    </Col>	
			</div>
		)
	}
}

//导出组件==module.exports==App
export default App;
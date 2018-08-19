//父组件向子组件传递
import React,{ Component } from 'react';


class Test extends Component{

	render(){//渲染(调用)
		console.log('Test render...')
		return(
			<div>
				test
			</div>
		)
	}	
}





export default Test;
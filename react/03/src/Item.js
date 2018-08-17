//父组件向子组件传递
import React,{ Component } from 'react';

class Item extends Component{

	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)
	}


	handleDelete(){//子组件向父组件传递参数 
		this.props.data(this.props.index)
		// console.log(this)
	}

	render(){//渲染(调用)

		return(

			<li onClick={this.handleDelete.bind(this)}>
				{this.props.content}
			</li>
		)
	}	
}
export default Item;
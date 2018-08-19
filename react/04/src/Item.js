//父组件向子组件传递
import React,{ Component } from 'react';

//类型检验
import PropTypes from 'prop-types';


class Item extends Component{

	constructor(props){
		super(props);//props发生改变,render会执行
		this.handleDelete=this.handleDelete.bind(this)
	};


	handleDelete(){//子组件向父组件传递参数 
		const {data,index}=this.props;
		data(index)
		/*this.props.data(this.props.index)*/
		// console.log(this)
	};

	render(){//渲染(调用)
		console.log('Item render...')
		const {content,test}=this.props; 
		return(
			<li onClick={this.handleDelete}>
				{test}-{content}
			</li>
		)
	};	
}


Item.propTypes={//propTypes是小写
	content:PropTypes.string.isRequired,
	index:PropTypes.number.isRequired,
	data:PropTypes.func.isRequired,
	test:PropTypes.string
};

Item.defaultProps={
	test:'hello'
}




export default Item;
//父组件向子组件传递
import React,{ Component } from 'react';

//类型检验
import PropTypes from 'prop-types';


class Item extends Component{

	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)
	};


	handleDelete(){//子组件向父组件传递参数 
		const {data,index}=this.props;
		data(index)
		/*this.props.data(this.props.index)*/
	};

	render(){//渲染(调用)
		console.log('Item render...')
		const {content,test}=this.props; //props用于父组件向子组件传递参数
		return(
			<li onClick={this.handleDelete}>
				{/*{test}-{content}*/}
				{content}
			</li>
		)
	};	
}


Item.propTypes={//propTypes是小写
	content:PropTypes.string.isRequired,
	index:PropTypes.number.isRequired,
	data:PropTypes.func.isRequired,
	// test:PropTypes.string
};

/*
Item.defaultProps={//自己定义的话就会替代默认的
	test:'hello'
}
*/




export default Item;
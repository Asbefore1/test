//父组件向子组件传递
import React,{ Component } from 'react';

//类型检验
import PropTypes from 'prop-types';


class Item extends Component{

	constructor(props){
		console.log('Item constructor....')
		super(props);
		this.state={};
		this.handleDelete=this.handleDelete.bind(this)
	};


	// static getDerivedStateFromProps(nextProps, prevState){//nextProps在此时是空对象,prevState相当于state,里面有value和list
	// 	console.log('Item getDerivedStateFromProps',nextProps, prevState)
	// 	return {};
	// }
	
	//应不应该更新
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.content !=this.props.content){//nextProps.content是即将更新的content,this.props.content是传过来的content
			console.log('Item shouldComponentUpdate',nextProps,nextState,this.props.content)
			return true;//如果是false,就不走render了
		}else{
			return false
		}
		
	}
	// //即将更新
	// getSnapshotBeforeUpdate(prevProps, prevState){
	// 	console.log('Item getSnapshotBeforeUpdate',prevProps,prevState)
	// 	return 222
	// }
	// //更新完成
	// componentDidUpdate(prevProps, prevState,snapshot){
	// 	console.log('Item componentDidUpdate',prevProps, prevState,snapshot)
	// }
	// //挂载完成
	// componentDidMount(){
	// 	/*
	// 	axios.get('/')
	// 	.then((res)=>{
	// 		// console.log('res...')
	// 	})
	// 	.catch((e)=>{
	// 		// console.log('err...')
	// 	})
	// 	*/
	// 	console.log('Item componentDidMount...')
	// }
	// //即将卸载
	// componentWillUnmount(){
	// 	console.log('Item componentWillUnmount...')
	// }




	handleDelete(){//子组件向父组件传递参数 
		const {data,index}=this.props;
		data(index)
		/*this.props.data(this.props.index)*/
	};

	render(){//渲染(调用)
		console.log('Item render...')
		const {content}=this.props; //props用于父组件向子组件传递参数
		return(
			<li onClick={this.handleDelete}>
				{content}
			</li>
		)
	};	
}


Item.propTypes={//propTypes是小写
	content:PropTypes.string.isRequired,
	index:PropTypes.number.isRequired,
	data:PropTypes.func.isRequired,
};





export default Item;
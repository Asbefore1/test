//入口文件(要显示的内容都在写在这)


//用react的语法解析文件
import React from 'react'; //相当于const React=require('react')

//ReactDom就是用来把组件挂载到DOM节点上
import ReactDom from 'react-dom';//相当于构造函数

//注意：自己定义的组件必须首字母大写
import App from './App';

//Provider是组件首字母要大写
import { Provider }  from 'react-redux';

//必须要引入store
import store from './store/index.js';

ReactDom.render(
	//provider用来指定所有子组件的store
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
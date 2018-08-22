//用react的语法解析文件
import React from 'react'; //相当于const React=require('react')

//ReactDom就是用来把组件挂载到DOM节点上
import ReactDom from 'react-dom';//相当于构造函数

//引入组件
import App from './App';


ReactDom.render(<App />,document.getElementById('root'))//<App />相当于调用
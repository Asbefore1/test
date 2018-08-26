import React,{ Component } from 'react';
import Todolist from './pages/todolist';//默认找indedx.js
//引入css
import './App.css';

//App相当于是一个根组件
class App extends Component{
	render(){
		return(
			<div className='App'>
				<Todolist />
			</div>
		)
	}
}

export default App;
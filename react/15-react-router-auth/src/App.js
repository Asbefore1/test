import React,{ Component } from 'react';
import Todolist from './pages/todolist';//默认找indedx.js
//引入css
import './App.css';

import {
	// HashRouter as Router,
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect//自动跳转
} from 'react-router-dom'


class BBB extends Component{
	render(){
		return(								
			<div>
				bbbbbb		
			</div>			
		)
	}
}

class Login extends Component{
	render(){
		return(								
			<div>
				component login
			</div>			
		)
	}
}


//App相当于是一个根组件
class App extends Component{

	constructor(props){
		super(props);
		this.state={
			islogin:false
		}	
	}

	render(){
		//...rest是除了component以外的其他参数,在这里是path="/b"
		const ProtectedRoute=({component:Component,...rest})=>(//component相当于是组件的定义component,Component相当于是组件的名字{ BBB }
			<Route {...rest } render={ props => (	//props从App父组件向子组件Login子组件传参数,就是...rest,rest是剩余的参数
				this.state.islogin	
				? 	(<Component {...props} />) 
				: 	(<Redirect to={{//自动跳转
		            	pathname: '/login'
		         	}}/>)
			)} />
		)


		return(
			<Router>{/*只包含一个*/}
				<div className='App'>
					<ul>
						<li>
							<Link to={ '/Todolist' }>todolist</Link>
						</li>
						<li>
							<Link to={ '/b' }>b-to-Component</Link>
						</li>
						<li>
							<Link to={ '/a' }>a-to-a</Link>
						</li>
					</ul>
					{
						//component组件的意思
					}
					<Route path="/Todolist" component={ Todolist }/>				
					<ProtectedRoute path="/b" component={ BBB } />							
					<Route path="/a" render={()=>(<h1>aaaaa</h1>)} />							
					<Route path="/login" component={ Login } />							
				</div>
			</Router>
		)
	}
}

export default App;
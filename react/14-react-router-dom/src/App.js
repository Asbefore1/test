import React,{ Component } from 'react';
import Todolist from './pages/todolist';//默认找indedx.js
//引入css
import './App.css';

import {
	// HashRouter as Router,
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class BBB extends Component{
	render(){
		return(								
			<div>
				bbbbbb
				<Switch>			
					<Route exact path="/b" render={()=>(<h1>no params</h1>)} />				
					<Route path="/b/sub" render={()=>(<h1>b/sub</h1>)} />	
					<Route path="/b/:id" render={(route)=>(<h1>params{route.match.params.id}</h1>)} />	
				</Switch>			
			</div>			
		)
	}
}




//App相当于是一个根组件
class App extends Component{
	render(){
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
							<Link to={ '/b/123' }>b-to-Component-params</Link>
						</li>
						<li>
							<Link to={ '/b/sub' }>b-to-sub</Link>
						</li>
						<li>
							<Link to={ '/a' }>a-to-a</Link>
						</li>
					</ul>
					{
						//component组件的意思
					}
					<Route path="/Todolist" component={ Todolist }/>				
					<Route path="/b" component={ BBB } />							
					<Route path="/a" render={()=>(<h1>aaaaa</h1>)} />							
				</div>
			</Router>
		)
	}
}

export default App;
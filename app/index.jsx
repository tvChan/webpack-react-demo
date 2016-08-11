import '../node_modules/bootstrap/scss/bootstrap.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import Plist from './components/plist';

class App extends React.Component{
	constructor() {
		super();
	}
	render() {
		// JSX here!
		return (
			<div className="container">
				<section className="jumbotron">
					<h3 className="jumbotron-heading">Search Github Users</h3>
				</section>
			</div>
		)
	}
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
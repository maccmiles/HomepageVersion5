import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component{
	render(){
		return(
			<div>
			< Background />
			< Footer />
			</div>
		);
	}
}

class Background extends React.Component{
	render(){
		return(
		<img src=>
			background
		</div>
		);
	}
}


class Footer extends React.Component{
	render(){
		return(
			<div class="footer">
			<p>Footer</p>
			</div>
		);
	}
}

ReactDOM.render(
	<App />
	, document.getElementById('root'));

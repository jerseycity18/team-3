import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Header extends Component {
	render() {
		return (
		  <header className="App-header">
			  <img src="https://www.bestbuddies.org/wp-content/uploads/2017/01/best-buddies-logo2.png" className="App-logo" alt="logo" />
			  <h1 className="App-title">Best Buddies Matching System</h1>
			  <nav>
				  <Link to="dashboard">Home</Link>
			  </nav>
		  </header>
		);
	}
}

export default Header;

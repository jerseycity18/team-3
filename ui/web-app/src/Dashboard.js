import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		return (
		  <section>
			  <h1 className="App-title">Dashboard</h1>
			  <ul>
				  <li><Link to="buddies">Buddies</Link></li>
				  <li><Link to="volunteers">Volunteers</Link></li>
			  </ul>
		  </section>
		);
	}
}

export default Dashboard;
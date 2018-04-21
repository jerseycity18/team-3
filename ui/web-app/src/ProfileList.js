import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileList extends Component {
	render() {
		return (
		  <section>
			  {/*<img src={logo} className="App-logo" alt="logo" />*/}
			  <h1 className="App-title">Buddies</h1>
			  <ul>
				  <li><Link to="/buddies/1">David Orlansky</Link></li>
				  <li><Link to="/buddies/2">David Orlansky</Link></li>
				  <li><Link to="/buddies/3">David Orlansky</Link></li>
				  <li><Link to="/buddies/4">David Orlansky</Link></li>
			  </ul>
		  </section>
		);
	}
}

export default ProfileList;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileList extends Component {
	constructor(props){
		super(props);
		this.state= {
			people: []

		};
		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount(){
		this.getAPI();
	}

	getAPI(){
		console.log('getapi',this.state.search);
		let api=fetch('/samples/participant.txt')
		.then((response) =>  response.json())
		.then((responseJson) => {
			console.log('resp',responseJson);
			this.setState({people:responseJson});
		})
		.catch((error) => {
			console.error(error);
		});
	}
	
	handleClick(e){
		console.log('clicked',e);
	}
	render() {
		let buddy=this.state.people;
		return (
		  <section>
			  <h1 className="App-title">Buddies</h1>
			  <ul>
				  {
					  buddy.map((item,ind) => (
						<li key={`${ind}${item}`} onClick={() => this.handleClick(item)} value={item}><Link to="/buddies/1">{item.contactInfo.firstName} {item.contactInfo.lastName}</Link></li>
					  ))
				  }
				  <li><Link to="/buddies/1">David Orlansky</Link></li>
			  </ul>
		  </section>
		);
	}
}

export default ProfileList;
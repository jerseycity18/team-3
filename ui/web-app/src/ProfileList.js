import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileList extends Component {
	constructor(props){
		super(props);
		this.state= {
			people: []

		};
		this.handleClick=this.handleClick.bind(this);


		// this.handleChange=this.handleChange.bind(this);
		// this.handleFocus=this.handleFocus.bind(this);
		// this.handleBlur=this.handleBlur.bind(this);
		// this.handleSubmit=this.handleSubmit.bind(this);this.handleChange=this.handleChange.bind(this);
		// this.handleFocus=this.handleFocus.bind(this);
		// this.handleBlur=this.handleBlur.bind(this);
		// this.handleSubmit=this.handleSubmit.bind(this);
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
			// if(this.state.searchHistory.indexOf(this.state.search)<0){
			// 	this.setState({gifs: responseJson.data,searchHistory:[this.state.search,...this.state.searchHistory]});
			// }else{
			// 	this.setState({gifs: responseJson.data});
			// }
		})
		.catch((error) => {
			console.error(error);
		});

		// https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q=puppies&limit=25&offset=0&rating=G&lang=en
	}
	
	handleClick(e){
		console.log('clicked',e);
	}
	render() {
		let buddy=this.state.people;
		return (
		  <section>
			  {/*<img src={logo} className="App-logo" alt="logo" />*/}
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
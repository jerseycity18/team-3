import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

import App from './App';
import Header from './Header';
import Dashboard from './Dashboard';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router path="/">
	  <div className="App">
		  <Header path={window.location.href} />
		  <Switch>
			  <Route exact path="/" component={App} />
			  <Route exact path="/dashboard" component={Dashboard} />
			  <Route exact path="/buddies" component={ProfileList} />
			  <Route exact path="/buddies/:id" component={ProfileDetail} />
			  <Route exact path="/volunteers" component={ProfileList} />
			  <Route component={App} />
			  <Route path='*' component={App} />
		  </Switch>
	  </div>
  </Router>
  ,

  document.getElementById('root'));
registerServiceWorker();
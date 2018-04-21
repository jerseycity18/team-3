import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router path="/">
	  <div className="App">
		  <Header path={window.location.href} />
		  <Switch>
			  {/*<Route exact path="/" component={Reddit} />*/}
			  {/*<Route exact path="/giphy" component={Giphy} />*/}
			  {/*<Route exact path="/reddit" component={Reddit} />*/}
			  <Route component={App} />
			  <Route path='*' component={App} />
		  </Switch>
	  </div>
  </Router>
  ,

  document.getElementById('root'));
registerServiceWorker();
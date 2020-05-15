import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import Faq from '../Faq/Faq';
import ContactUs from '../ContactUs';
import './App.css';

class App extends Component {
  render() {
    return (      
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/contact" component={ContactUs} />
      </div>
    );
  }
}

export default App;
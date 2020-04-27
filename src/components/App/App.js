import React, {Component} from 'react';
import {Accordion, Card} from 'react-bootstrap'
//import Accordion from '../Accordion/Accordion';
import './App.css';

// Rewrite with proper indentation

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Question
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Answer</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
export default App;
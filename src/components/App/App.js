import React, {Component} from 'react';
import AccordionItem from '../../components/Accordion/AccordionItem'
import faqs from '../../data/faqs.json'
import './App.css';

class App extends Component {

  state = {
    activeIndex: -1
  }

  handleClick = (index) => {
    const newIndex = this.state.activeIndex === index ? -1 : index

    this.setState({
      activeIndex: newIndex
    })
  }
  
  render() {
    return (      
      <div className="App">
        <div className="navbar"></div>
        <div className="max-width-container">
          <div className="header-container">
            <h1>Frequently Asked Questions</h1>
          </div>
          {faqs.map((faq, index) => (
            <AccordionItem 
            header={faq.question} 
            body={faq.answer}
            isOpen={this.state.activeIndex === index} 
            key={index}
            index={index}
            handleClick = {this.handleClick.bind(this)}
            />
          ))}
        </div>
        <div className="max-width-container">
          <div className="header-container">
            <h1>Contact Us</h1>
          </div>
          
        </div>
      </div>
    );
  }
}
export default App;
import React, {Component} from 'react';
import Accordion from '../../components/Accordion/Accordion'
import AccordionItem from '../../components/Accordion/AccordionItem'
import faqs from '../../data/faqs.json'

import IosAdd from 'react-ionicons/lib/IosAdd'
import IosRemove from 'react-ionicons/lib/IosRemove'
import './App.css';

class App extends Component {

  state = {
    activeIndex: -1
  }

  handleClick = (index) => {
    const newIndex = this.state.activeIndex == index ? -1 : index

    this.setState({
      activeIndex: newIndex
    })
  }
  
  render() {
    return (      
      <div className="App">
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <AccordionItem 
            header={faq.question} 
            body={faq.answer} 
            isOpen={this.state.activeIndex == index} 
            key={index}
            index={index}
            handleClick = {this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
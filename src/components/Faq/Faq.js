import React, { Component } from 'react';
import AccordionItem from './AccordionItem'
import faqs from '../../data/faqs.json'

class Faq extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { activeIndex: -1 }
  }

  handleClick = (index) => {
    const newIndex = this.state.activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const accordionItems = faqs.map((faq, index) => (
      <AccordionItem 
        header={faq.question} 
        body={faq.answer}
        link={faq.link}
        isOpen={this.state.activeIndex === index} 
        key={index}
        index={index}
        handleClick = {this.handleClick}
      />
    ));

    return (
      <div className="Faq">
        <div className="max-width-container">
          <div className="header-container">
            <h1>Frequently Asked Questions</h1>
          </div>
          {accordionItems}
        </div>
      </div>
    );
  }
}

export default Faq;
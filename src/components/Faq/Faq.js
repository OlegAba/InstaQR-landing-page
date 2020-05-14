import React, { Component } from 'react';

import AccordionItem from '../../components/Accordion/AccordionItem'
import faqs from '../../data/faqs.json'

class Faq extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      activeIndex: -1,
      status: ""
    }
  }

  handleClick = (index) => {
    const newIndex = this.state.activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };

    xhr.send(data);
  }

  render() {

    const accordionItems = faqs.map((faq, index) => (
      <AccordionItem 
        header={faq.question} 
        body={faq.answer}
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
        <div className="max-width-container">
          <form
            className="contact-us-form"
            onSubmit={this.handleSubmit} 
            action="https://formspree.io/mqkyanrj" 
            method="POST"
          >
            <label>Email: </label>
            <input type="email" name="email" />
            <label>Message: </label>
            <input type="text" name="message" />
            {this.state.status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {this.state.status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default Faq;
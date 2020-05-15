import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      status: ""
    }
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
    
    return (
      <div className="ContactUs">
        <div className="max-width-container">
          <div className="header-container">
            <h1>Contact Us</h1>
            <p>Got a question? We'd love to hear from you. Submit the form and we'll response as soon as possible</p>
          </div>

          <div className="form-container">
            <form
              className="contact-us-form"
              onSubmit={this.handleSubmit} 
              action="https://formspree.io/mqkyanrj" 
              method="POST"
            >
              <div className="input-container">
                <label>Name </label>
                <input required type="text" name="name" />
              </div>
              <div required className="input-container">
                <label>Email </label>
                <input type="email" name="email" />
              </div>
              <div required className="input-container">
                <label>Message </label>
                <textarea type="text" name="message" />
              </div>
              {this.state.status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
              {this.state.status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
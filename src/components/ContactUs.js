import React, { Component } from 'react';

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
      <div>
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

export default ContactUs;
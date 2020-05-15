import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import './AccordionItem.css';

class AccordionItem extends Component {
  render() {
    const body = this.props.body.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));

    const link = this.props.link != undefined &&
      <div className="link-container">
        <Link to="/contact" className="link">Contact Us</Link>
      </div>

    return (
      <div className="AccordionItem">
        <div 
          className="header" 
          onClick={() => this.props.handleClick(this.props.index)}
        >
          <p>{this.props.header}</p>
          <div className="icon-container">
            <IosArrowDown 
              className={"arrow-icon " + (this.props.isOpen ? 'open' : '')}
              color={"#c7c7cd"} 
            />
          </div>
        </div>

        <AnimateHeight 
          duration={400} 
          height={this.props.isOpen ? 'auto' : 0} 
        >
          <div className="body-container">
            {body}
            {link}
          </div>
        </AnimateHeight>
      </div>
    )
  }
}

export default AccordionItem;
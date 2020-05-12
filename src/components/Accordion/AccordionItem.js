import React, {Component} from 'react';
import AnimateHeight from 'react-animate-height';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import './AccordionItem.css';

class AccordionItem extends Component {
  render() {
    return (
      <div
      className={"AccordionItem"}
      onClick={() => this.props.handleClick(this.props.index)}
      >
        <div className="header">
          <h2>{this.props.header}</h2>
          <IosArrowDown 
          className={"arrow-icon " + (this.props.isOpen ? 'open' : '')} />
        </div>

        <AnimateHeight 
          duration={400} 
          height={this.props.isOpen ? 'auto' : 0}
          className="AnimateHeight" >
          <p>{this.props.body}</p>
        </AnimateHeight>
      </div>
    )
  }
}

export default AccordionItem;
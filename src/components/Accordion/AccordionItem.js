import React, {Component} from 'react';

class AccordionItem extends Component {
  render() {
    return (
      <div 
      className={"AccordionItem " + (this.props.isOpen ? 'open' : '')}
      onClick={() => this.props.handleClick(this.props.index)}
      >
        <div className="header">
          {this.props.header}
        </div>
        <div className="body">
          {this.props.body}
        </div>
      </div>
    )
  }
}

export default AccordionItem;
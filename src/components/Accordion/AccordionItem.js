import React, {Component} from 'react';
import IosAdd from 'react-ionicons/lib/IosAdd'
import IosRemove from 'react-ionicons/lib/IosRemove'
import './AccordionItem.css';

class AccordionItem extends Component {
  render() {
    return (
      <div 
      className={"AccordionItem " + (this.props.isOpen ? 'open' : '')}
      onClick={() => this.props.handleClick(this.props.index)}
      >
        <div className="header">
          {this.props.header}
          {this.props.isOpen ? <IosRemove /> : <IosAdd />}
        </div>
        <div className="body">
          {this.props.body}
        </div>
      </div>
    )
  }
}

export default AccordionItem;
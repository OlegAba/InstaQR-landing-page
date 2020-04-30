import React, {Component} from 'react';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="Accordion">
        
      </div>


            // <div className="container">
            //     <div className="accordion">
            //         {FaqsData.map((faq, index) => {
            //             return <AccordionItem item={faq} key={'accordion-item-key ${index}'} />
            //         })}
            //     </div>
            // </div>
    )
  }
}

export default Accordion;
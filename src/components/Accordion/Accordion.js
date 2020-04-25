import React, {Component} from 'react';
import FaqsData from '../../data/faqs.json';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
    render() {
        return (
            <div className="container">
                <div className="accordion">
                    {FaqsData.map((faq, index) => {
                        return <AccordionItem item={faq} key={'accordion-item-key ${index}'} />
                    })}
                </div>
            </div>
        )
    }
}

export default Accordion;
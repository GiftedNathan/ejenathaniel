import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './contact.css'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({title, subtitle, note}) => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7axo4gb', 'template_z9szsgr', form.current, 'user_iec6KP9eYzC2iFC5C4j4K')
        .then((result) => {
            // console.log(result.text);
            alert("Thank you for contacting Eje Nathaniel, He will respond sooner than you expect.");
        }, (error) => {
            // console.log(error.text);
            alert("Opps, something went wrong. Check internet connection and try again.");
        });
    };


    return (
        <div id="contact" className="contact-section">
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" name="user_name" placeholder="name" />
                <input type="email" className="email" name="user_email" placeholder="email" />
                <input type="text" className="subject" name="user_subject" placeholder="subject" />
                <textarea name="message" id="message" cols="30" rows="5" className="message" placeholder="subject"></textarea>
                
                <Button name={'Submit'} />
            </form>
        </div>
    )
}

Contact.defaultProps = {
    title: 'contact',
    subtitle: 'I will Love to hear from you please.',
    note: 'Kindly leave a message by filing the form below and I will respond accordingly, Thank You',
}

export default Contact

import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './contact.css'

const Contact = ({title, subtitle, note}) => {
    return (
        <div id="contact" className="contact-section">
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <form className="contact-form">
                <input type="text" className="name" id="name" placeholder="name" />
                <input type="email" className="email" id="email" placeholder="email" />
                <input type="text" className="subject" id="subject" placeholder="subject" />
                <textarea name="message" id="textarea" cols="30" rows="5" className="message" placeholder="subject"></textarea>
                
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

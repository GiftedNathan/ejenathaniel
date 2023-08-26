import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './contact.css'

import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";


const Contact = ({ title, subtitle, note }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const form = useRef();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const clearInput = (event) => {
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };


    const sendEmail = (e) => {
        // e.preventDefault();

        emailjs.sendForm('service_7axo4gb', 'template_z9szsgr', form.current, 'user_iec6KP9eYzC2iFC5C4j4K')
            .then((result) => {
                // console.log(result.text);
                alert("Thank you! I would like to inform you that an auto-generated email has been sent to the provided email address confirming the receipt of your message. This email serves as an acknowledgment that I have received your submission and will respond as soon as possible, Kindly check your email.");
                clearInput();
                // form.reset()
            }, (error) => {
                // console.log(error.text);
                alert("Opps, Check your internet connection and try again. " + error.text);
            }
            );

    }

    return (
        <div id="contact" className="contact-section">

            <SectionHeader title={title} subtitle={subtitle} note={note} />

            <form className="contact-form" id='contact-form' ref={form} onSubmit={handleSubmit(sendEmail)}>
                {/* <form className="contact-form" id='contact-form' ref={form} onSubmit={handleSubmit(sendEmail)}> */}
                <input
                    type="text" className="name" name="user_name" placeholder="Full Name" id="user_name"
                    {...register("user_name", { required: true, maxLength: 65, minLength: 3 })}
                    aria-invalid={errors.name ? "true" : "false"}
                    onChange={event => setFullName(event.target.value)}
                    value={fullName}
                />

                {errors.name && errors.name.type === "required" && <p className='error'>Full name is required</p>}
                {errors.name && errors.name.type === "maxLength" && <p className='error'>Max length of 65 characters exceeded</p>}
                {errors.name && errors.name.type === "minLength" && <p className='error'>Name must be more than 3 characters</p>}
                {/* {errors.fullName?.type === 'required' && <p className='error' role="alert">Full name is required *</p>} */}

                {/* <input type="email" className="email" name="user_email" placeholder="email" /> */}
                <input
                    type="email" className="email" id="user_email" name="user_email" placeholder="email"
                    {...register("user_email", { required: "Email Address is required *" })}
                    aria-invalid={errors.mail ? "true" : "false"}
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
                {errors.mail && <p className='error' role="alert">{errors.mail?.message}</p>}


                {/* <input type="text" className="subject" name="user_subject" placeholder="subject" /> */}
                <input
                    type="text" className="subject" id="user_subject" name="user_subject" placeholder="Subject"
                    {...register("user_subject", { required: true })}
                    aria-invalid={errors.subject ? "true" : "false"}
                    onChange={event => setSubject(event.target.value)}
                    value={subject}
                />
                {errors.subject?.type === 'required' && <p className='error' role="alert">Subject is required *</p>}


                {/* <textarea name="message" id="message" cols="30" rows="5" className="message" placeholder="Your message"></textarea> */}
                <textarea
                    name="message" id="message" cols="30" rows="5" className="message" placeholder="Your message"
                    {...register("message", { required: true, minLength: 3 })}
                    aria-invalid={errors.message ? "true" : "false"}
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                >
                </textarea>
                {errors.message?.type === 'required' && <p className='error' role="alert">Message field is required *</p>}
                {errors.message && errors.message.type === "minLength" && <p className='error'>Name must be more than 3 characters</p>}

                <Button type="submit" name={'Submit'} />

            </form>


        </div>
    )


}

Contact.defaultProps = {
    title: 'contact',
    subtitle: 'I will Love to hear from you please.',
    note: 'Kindly leave a message by filing the form below and I will respond accordingly, Thank You!',
}

export default Contact

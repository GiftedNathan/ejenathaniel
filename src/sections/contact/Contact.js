import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './contact.css'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contact = ({title, subtitle, note}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7axo4gb', 'template_z9szsgr', form.current, 'user_iec6KP9eYzC2iFC5C4j4K')
        .then((result) => {
            // console.log(result.text);
            alert("Thank you for contacting Eje Nathaniel, He will respond sooner than you expect.");
            form.reset()
        }, (error) => {
            // console.log(error.text);
            alert("Opps, something went wrong. Check internet connection and try again.");
        });
    };


    return (
        <div id="contact" className="contact-section">
            
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            
            <form className="contact-form" ref={form} onSubmit={handleSubmit(sendEmail)}>
                {/* <input type="text" className="name" name="user_name" placeholder="name" /> */}
                <input 
                    type="text" className="name" name="user_name" placeholder="Full Name" id="name" 
                    {...register("name", { required: true, maxLength: 65, minLength: 3 })} 
                    aria-invalid={errors.name ? "true" : "false"} 
                />

                {errors.name && errors.name.type === "required" && <p className='error'>Full name is required</p>}
                {errors.name && errors.name.type === "maxLength" && <p className='error'>Max length of 65 characters exceeded</p> }
                {errors.name && errors.name.type === "minLength" && <p className='error'>Name must be more than 3 characters</p> }
                {/* {errors.fullName?.type === 'required' && <p className='error' role="alert">Full name is required *</p>} */}
                
                {/* <input type="email" className="email" name="user_email" placeholder="email" /> */}
                <input 
                    type="email" className="email" name="user_email" placeholder="email"
                    {...register("mail", { required: "Email Address is required *" })} 
                    aria-invalid={errors.mail ? "true" : "false"} 
                />
                {errors.mail && <p className='error' role="alert">{errors.mail?.message}</p>}


                {/* <input type="text" className="subject" name="user_subject" placeholder="subject" /> */}
                <input 
                    type="text" className="subject" name="user_subject" placeholder="Subject"
                    {...register("subject", { required: true })} 
                    aria-invalid={errors.subject ? "true" : "false"} 
                />
                {errors.subject?.type === 'required' && <p className='error' role="alert">Subject is required *</p>}


                {/* <textarea name="message" id="message" cols="30" rows="5" className="message" placeholder="Your message"></textarea> */}
                <textarea
                    name="message" id="message" cols="30" rows="5" className="message" placeholder="Your message"
                    {...register("message", { required: true, minLength: 3 })} 
                    aria-invalid={errors.message ? "true" : "false"} 
                >
                </textarea>
                {errors.message?.type === 'required' && <p className='error' role="alert">Message field is required *</p>}
                {errors.message && errors.message.type === "minLength" && <p className='error'>Name must be more than 3 characters</p> }
                
                <Button type="submit" name={'Submit'} />

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

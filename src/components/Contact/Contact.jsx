import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import css from './Contact.module.css';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_oc8hto7', 'template_fqjye7i', form.current, 'MlBwpE6Z64Pnd-HKO')
        .then((result) => {
            console.log(result.text);
            console.log('MESSAGE SENT')
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    const logFormData = (e) => {
        e.preventDefault();
        console.log(form.current)
    }

    return (
        <section id={css.contact}>
            <form className={css['contact-form']} ref={form} onSubmit={logFormData}>
                {/* <label>Name</label> */}
                <input className={css.name} type="text" name="user_name" placeholder='Name'/>
                {/* <label>Email</label> */}
                <input className={css.email} type="email" name="user_email" placeholder='Email'/>
                {/* <label>Message</label> */}
                <textarea className={css.message} name="message" placeholder='Message'/>
                <input className={css.submit} type="submit" value="Send" />
            </form>
        </section>
    );

};
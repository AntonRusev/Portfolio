import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import css from './Contact.module.css';
import { Modal } from '../Modal/Modal';

export const Contact = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        message: ''
    });
    const [touched, setTouched] = useState({
        username: false,
        email: false,
        message: false
    });
    const [modalActive, setModalActive] = useState(false);

    const form = useRef();

    useEffect(() => {
        if (formErrors.username || formErrors.email || formErrors.message) {
            setIsDisabled(true);
            modalTrigger();
        } else if (touched.username === false || touched.email === false || touched.message === false) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [formErrors.username, formErrors.email, formErrors.message, touched.username, touched.email, touched.message]);

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

    const validateForm = (e) => {
        const value = e.target.value;
        const inputField = e.target.name;

        if (inputField === 'user_name' && value === '') {
            setFormErrors(state => ({ ...state, username: 'Name is required' }));
        } else if (inputField === 'user_name' && value.length < 3) {
            setFormErrors(state => ({ ...state, username: 'Name must be at least 3 characters long' }));
        } else if (inputField === 'user_name') {
            setFormErrors(state => ({ ...state, username: '' }));
            setTouched(state => ({ ...state, username: true }));
        }

        if (inputField === 'user_email' && value === '') {
            setFormErrors(state => ({ ...state, email: 'Email is required' }));
        } else if (inputField === 'user_email' && value.length > 0) {
            const isValid = isEmailValid(value);
            if (isValid === false) {
                console.log('why this?')
                setFormErrors(state => ({ ...state, email: 'Email is invalid' }));
            } else {
                setFormErrors(state => ({ ...state, email: '' }));
                setTouched(state => ({ ...state, email: true }));
            }
        }

        if (inputField === 'message' && value === '') {
            setFormErrors(state => ({ ...state, message: 'Message is required' }));
        } else if (inputField === 'message' && value.length < 5) {
            setFormErrors(state => ({ ...state, message: 'Message must be at least 5 characters long' }));
        } else if (inputField === 'message') {
            setFormErrors(state => ({ ...state, message: '' }));
            setTouched(state => ({ ...state, message: true }));
        }
    }

    const logFormData = (e) => {
        e.preventDefault();
        console.log(form.current);
        setModalActive(!modalActive);
    }

    const modalTrigger = () => {
        setModalActive(!modalActive);
    }

    function isEmailValid(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <section id="contact" className={css.contact} >

            <h2 id="contact-me" className={css.title}>CONTACT</h2>
            
            <div className={css.content}>
                <form className={css['contact-form']} ref={form} onSubmit={logFormData}>

                    <input className={css.name} type="text" name="user_name" placeholder='Name' onBlur={validateForm} />

                    <input className={css.email} type="email" name="user_email" placeholder='Email' onBlur={validateForm} />

                    <textarea className={css.message} name="message" placeholder='Message' onBlur={validateForm} />

                    <input className={css.submit} type="submit" value="Send" disabled={isDisabled ? 'disabled' : ''} />

                    {modalActive && <Modal modalTrigger={modalTrigger} formErrors={formErrors} />}
                </form>

                <p className={`${css.subtitle} ${css['msg-one']}`}>Feeling social?</p>
                <p className={`${css.subtitle} ${css['msg-two']}`}>Get in touch!</p>

                <div className={css['social-media']}>
                    <p><i className={`${css.github} fa-brands fa-github`}></i></p>
                    <p><i className={`${css.discord} fa-brands fa-discord`}></i></p>
                    <p><i className={`${css.facebook} fa-brands fa-facebook`}></i></p>
                </div>
            </div>
            <p className={css['made-by']}>Designed and hand-coded by Anton Rusev. Year 2023.</p>
        </section>
    );

};
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormStyle = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 1rem;
  }
  .success-message {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: white;
  }
  .submitted {
    opacity: 0.7;
    transition: opacity 0.5s ease-in-out;
  }
  .input-animated {
    transform: translateX(5px);
    transition: transform 0.2s ease-in-out;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rh2pi39',
        'template_6jgrl1k',
        form.current,
        'poHMI8nYk4VuRlSOu'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message Sent Successfully');
          setSubmitted(true);
          form.current.classList.add('submitted');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <FormStyle>
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input
            placeholder="John Doe"
            type="text"
            name="user_name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => e.target.classList.add('input-animated')}
            onBlur={(e) => e.target.classList.remove('input-animated')}
            required // add required attribute
          />

          <label>Your Email Address</label>
          <input
            type="email"
            placeholder="test@mail.com"
            name="user_email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => e.target.classList.add('input-animated')}
            onBlur={(e) => e.target.classList.remove('input-animated')}
            required // add required attribute
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // add pattern attribute
          />
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Type your message!!"
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            onFocus={(e) => e.target.classList.add('input-animated')}
            onBlur={(e) => e.target.classList.remove('input-animated')}
          />
          {submitted && (
            <div className="success-message">Mail sent successfully!</div>
          )}
          <button type="submit">Send</button>
        </form>
      </FormStyle>
    </>
  );
}

/** 🌹oddFEELING */

import React, { useState, useEffect, useRef } from 'react';

//=============================================>  # RENDER
const CustomFormComponent = (props) => {
  const mailform = useRef();
  const { status, message, onValidated } = props;
  const [text, setText] = useState('subscribe');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    status === 'sending' && setText('loading...');
    status === 'error' && setText('error');
    status === 'success' && setText('success');
    if (status === 'success') {
      setEmail('');
      setName('');
      setLastname('');
      setPhone('');
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 11) return alert('Phone number should be 11 digits');
    if (!email || !name || !lastname || phone) setText('Missing fields');
    email &&
      name &&
      lastname &&
      phone &&
      email.indexOf('@') > -1 &&
      onValidated({
        MERGE0: email,
        MERGE3: lastname,
        MERGE1: name,
        MERGE2: phone,
      });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      method='POST'
      ref={mailform}
      className='newsletter__form'
    >
      <section className='newsletter__form-section'>
        {/* ====== email */}
        <input
          required
          type='email'
          value={email}
          placeholder='email'
          className='newsletter__form-input'
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* ====== title field */}
        <input
          required
          type='text'
          value={lastname}
          placeholder='last name'
          className='newsletter__form-input'
          onChange={(e) => setLastname(e.target.value)}
        />
      </section>
      <section className='newsletter__form-section'>
        {/* ====== first name */}
        <input
          required
          type='text'
          value={name}
          placeholder='first name'
          className='newsletter__form-input'
          onChange={(e) => setName(e.target.value)}
        />
        {/* ====== phone */}
        <input
          required
          type='tel'
          value={phone}
          minLength={10}
          placeholder='phone number'
          className='newsletter__form-input'
          onChange={(e) => setPhone(e.target.value)}
        />
      </section>

      <button className='newsletter__form-submit'>{text}</button>
    </form>
  );
};

export default CustomFormComponent;

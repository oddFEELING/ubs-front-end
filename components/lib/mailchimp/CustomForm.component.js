/** 🌹oddFEELING */

import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../button/Button.component';

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
    <Form onSubmit={(e) => handleSubmit(e)} method='POST' ref={mailform}>
      <Section>
        {/* ====== email */}
        <Input
          required
          type='email'
          value={email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* ====== title field */}
        <Input
          required
          type='text'
          value={lastname}
          placeholder='last name'
          onChange={(e) => setLastname(e.target.value)}
        />
      </Section>
      <Section style={{ marginTop: '-2vh' }}>
        {/* ====== first name */}
        <Input
          required
          type='text'
          value={name}
          placeholder='first name'
          onChange={(e) => setName(e.target.value)}
        />
        {/* ====== phone */}
        <Input
          required
          type='tel'
          value={phone}
          minLength={10}
          placeholder='phone number'
          onChange={(e) => setPhone(e.target.value)}
        />
      </Section>

      <Button
        text={text}
        onClick={handleSubmit}
        bg={() => {
          if (status === 'success') return '#27E746';
          if (status === 'error') return '#E72727';
          if (status === 'sending') return '#83D9EC';
          return '#E72727';
        }}
        color={() => {
          if (status === 'sending') return '#393939';
          return '#f3f4ff';
        }}
      />
    </Form>
  );
};

export default CustomFormComponent;

//=============================================>  # COMPONENT
const Form = styled.form`
  gap: 3vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding: 15px;
  font-weight: 300;
  border-radius: 5px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.lt_2};
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};
  background-color: ${({ theme }) => theme.colors.clr_5};
  transition: ${({ theme }) => theme.transition.smooth};

  &:focus {
    outline: thin solid ${({ theme }) => theme.alpha('lt_2', 0.7)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.alpha('lt_2', 0.4)};
  }

  @media (max-width: 800px) {
    height: 45px;
  }
`;

const Section = styled.section`
  gap: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

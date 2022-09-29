/** 🌹oddFEELING */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import Button from '../../lib/button/Button.component';
import { EnvelopeIcon, UserIcon, FlagIcon } from '@heroicons/react/24/solid';
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
import { useQuery } from 'react-query';

//=============================================>  RENDER
const ContactFormComponent = () => {
  const theme = useTheme();
  const [Message, setMessage] = useState({
    sender: '',
    contact: '',
    title: '',
    content: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      'https://ubs-server.herokuapp.com/messages/',
      Message
    );
    console.log(result);
    if (result) {
      alert('sent!');
    } else {
      alert('Failed too send ');
    }
  };

  // ======= function to set message object state -->
  const stateSetter = (state, payload) => {
    setMessage({ ...Message, [state]: payload });
  };

  return (
    <Container>
      {/* ====== full name */}
      <div className='max-w-xl w-full'>
        <label
          htmlFor='name'
          className='block text-sm font-medium font-primary text-light-200 md:text-xl'
        >
          Full name
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <UserIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            type='text'
            name='name'
            id='name'
            value={Message.sender}
            onChange={(e) => stateSetter('sender', e.target.value)}
            className='contact__form-input'
            placeholder='firstname lastname'
          />
        </div>
      </div>

      {/* ====== email */}
      <div className='w-full max-w-xl '>
        <label
          htmlFor='text'
          className='block text-sm font-medium font-secondary text-light-200 md:text-xl'
        >
          Contact
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <EnvelopeIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            type='contact'
            name='contact'
            id='contact'
            onChange={(e) => stateSetter('contact', e.target.value)}
            value={Message.contact}
            className='contact__form-input'
            placeholder='email / phone'
          />
        </div>
      </div>

      {/* ====== message title  */}
      <div className='w-full max-w-xl '>
        <label
          htmlFor='title'
          className='block text-sm font-medium font-primary text-light-200 md:text-xl'
        >
          Message Title
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <FlagIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            type='text'
            name='title'
            id='title'
            value={Message.title}
            onChange={(e) => stateSetter('title', e.target.value)}
            className='contact__form-input'
            placeholder='Reason for message'
          />
        </div>
      </div>

      {/* ====== text area */}
      <div className='w-full max-w-xl '>
        <label
          htmlFor='message'
          className='block text-sm font-medium font-primary text-light-200 md:text-xl'
        >
          Add your message
        </label>
        <div className='mt-1'>
          <textarea
            rows={4}
            name='message'
            id='message'
            value={Message.content}
            onChange={(e) => stateSetter('content', e.target.value)}
            className='p-3 max-h-36 md:text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 bg-color-5 rounded-md resize-none font-secondary'
            placeholder='message...'
            defaultValue={''}
          />
        </div>
      </div>

      <Button
        text='Submit'
        bg={theme.colors.clr_1}
        color={theme.colors.lt_2}
        onClick={(e) => handleSubmit(e)}
        sx={{ alignSelf: 'flex-start' }}
      />
    </Container>
  );
};

export default React.memo(ContactFormComponent);

//=============================================>  COMPONENT
const Container = styled.form`
  gap: 30px;
  width: 90%;
  display: flex;
  padding: 100px 70px;
  padding-top: 50px;
  border-radius: 15px;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.sd_5};
  background-color: ${({ theme }) => theme.alpha('dk_1', 0.4)};

  @media (max-width: 1024px) {
    width: 100%;
    padding: 100px 20px;
  }
`;

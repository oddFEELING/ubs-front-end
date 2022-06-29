/** 🌹oddFEELING */

import React from 'react';
import * as Reg from './Register.component';
import { useRouter } from 'next/router';
import { Router } from '@mui/icons-material';
import Button from '../../lib/button/Button.component';
import Separator from '../../lib/separator/Separator.component';

const Register = () => {
  const router = useRouter();
  return (
    <Reg.Container>
      <Reg.Title>Do You believe in the BEST?</Reg.Title>
      <Separator width='120px' height='5px' top='-2.5vh' />
      <Reg.Content>Register your Child with Us!</Reg.Content>
      <Button
        text='Contact Us!'
        bg='#E84D4F'
        color='#f3f4ff'
        onClick={() => router.push('/contact')}
      />
    </Reg.Container>
  );
};

export default Register;

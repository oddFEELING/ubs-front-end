/** 🌹oddFEELING */

import React from 'react';
import Button from '../../lib/button/Button.component';
import Separator from '../../lib/separator/Separator.component';
import * as Reg from './Register.component';

const Register = () => {
  return (
    <Reg.Container>
      <Reg.Title>Do You believe in the BEST?</Reg.Title>
      <Separator width='120px' height='5px' top='-2.5vh' />
      <Reg.Content>Register your Child with Us!</Reg.Content>
      <Button text='Contact Us!' bg='#E84D4F' color='#f3f4ff' />
    </Reg.Container>
  );
};

export default Register;

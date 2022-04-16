/** 🌹oddFEELING */

import React from 'react';
import Nav from '../components/lib/navbar/Nav';

//=============================================>  COMPONENT
const AppLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default AppLayout;

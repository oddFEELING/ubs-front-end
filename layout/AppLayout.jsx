/** 🌹oddFEELING */

import React from 'react';
import Nav from '../components/lib/navbar/Nav';
import FooterT from '../components/lib/footer/Footer.component';

//=============================================>  COMPONENT
const AppLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <FooterT />
    </div>
  );
};

export default AppLayout;

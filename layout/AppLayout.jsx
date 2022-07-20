/** 🌹oddFEELING */

import React from 'react';
import Footer from '../components/lib/footer/Footer';
import Nav from '../components/lib/navbar/Nav';
import FooterT from '../components/lib/footer/FooterT.component';

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

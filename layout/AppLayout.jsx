/** 🌹oddFEELING */

import React from 'react';
import Footer from '../components/lib/footer/Footer';
import Nav from '../components/lib/navbar/Nav';

//=============================================>  COMPONENT
const AppLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;

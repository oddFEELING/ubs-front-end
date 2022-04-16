/** 🌹oddFEELING */

import React, { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollChecker = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

    window.addEventListener('scroll', scrollChecker);
    window.addEventListener('focus', scrollChecker);
    window.addEventListener('load', scrollChecker);
    // ======= cleanup -->
    return () => {
      window.removeEventListener('scroll', scrollChecker);
      window.removeEventListener('focus', scrollChecker);
      window.removeEventListener('load', scrollChecker);
    };
  });
  return scrolled;
};

export default useScroll;

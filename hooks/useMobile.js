import React, { useReducer, useEffect } from 'react';
import { AgentChecker } from '../helpers/agent_checker.helper';

// ======= state reducer -->
const mobileReducer = (state, action) => {
  switch (action.type) {
    case 'MOBILE_AGENT':
      return (state = true);
    case 'SMALL_SCREEN':
      return (state = true);
    case 'NOT_MOBILE':
      return (state = false);

    default:
      return (state = false);
  }
};

const useMobile = () => {
  const [Mobile, dispatch] = useReducer(mobileReducer, true);

  useEffect(() => {
    const agent = window.navigator.userAgent;

    // ======= watcher function  -->
    const watcher = () => {
      if (window.innerWidth <= 800) return dispatch({ type: 'SMALL_SCREEN' });
      if (window.innerWidth > 800) return dispatch({ type: 'NOT_MOBILE' });
      if (AgentChecker(agent)) return dispatch({ type: 'MOBILE_AGENT' });
      return dispatch({ type: 'NOT_MOBILE' });
    };

    // ======= add listeners -->
    window.addEventListener('load', watcher);
    window.addEventListener('focus', watcher);
    window.addEventListener('resize', watcher);
    window.addEventListener('scroll', watcher);
    window.addEventListener('hashchange', watcher);

    // ======= cleanup -->
    return () => {
      window.removeEventListener('load', watcher);
      window.removeEventListener('focus', watcher);
      window.removeEventListener('resize', watcher);
      window.removeEventListener('scroll', watcher);
      window.removeEventListener('hashchange', watcher);
    };
  });

  return Mobile;
};

export default useMobile;

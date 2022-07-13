/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/about/about-hero.webp');
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.lt_2};
  }
`;

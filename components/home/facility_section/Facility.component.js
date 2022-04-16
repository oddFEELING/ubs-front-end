/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.section`
  z-index: 2;
  width: 100%;
  display: flex;
  height: max(700px, 100vh);
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/hero/facility-img.JPG');
  background-size: cover;
  background-position: center;
`;

// ======= content wrapper -->
export const ContentWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 3% 5%;
  background-color: ${({ theme }) => theme.alpha('clr_4', 0.9)};
`;

/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.section`
  z-index: 2;
  width: 100%;
  display: flex;
  padding: 5vh 3%;
  min-height: 400px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.clr_4};
`;

// ======= wrapper for card  -->
export const CardWrapper = styled.div`
  grid-gap: 2vw;
  display: grid;
  margin-top: -20vh;
  align-items: center;
  justify-content: center;
  grid-template-areas: 'item_1 item_2 item_3';

  @media screen and (max-width: 1024px) {
    justify-items: center;
    grid-template-areas:
      'item_1'
      'item_2'
      'item_3';
  }
`;

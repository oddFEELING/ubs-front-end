/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.section`
  gap: 4vh;
  width: 100%;
  display: flex;
  padding: 10vh 2vw;
  align-self: start;
  min-height: 600px;
  position: relative;
  align-items: center;
  flex-direction: column;
`;

// ======= title -->
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dk_1};
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

// ======= bg shape -->
export const BgShape = styled.div`
  top: 0;
  left: 2vw;
  display: flex;
  position: absolute;
  align-items: center;
  height: max(10vh, 80px);
  width: max(18vw, 100px);
  justify-content: center;

  @media (max-width: 800px) {
    height: 40px;
    width: 100px;
  }
`;

// ======= card section -->
export const CardWrapper = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-gap: 2vw;
  justify-items: center;
  grid-template-areas: 'item_1 item_2 item_3';

  @media (max-width: 1024px) {
    width: 90%;
    grid-gap: 2vh;
    grid-template-areas:
      'item_1'
      'item_2'
      'item_3';
  }
`;

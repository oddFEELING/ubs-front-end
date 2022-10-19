/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.section`
  gap: 4vh;
  width: 100%;
  height: auto;
  display: flex;
  min-height: 600px;
  padding: 150px 4vw;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.alpha('clr_4', 0.9)}, ${theme.alpha(
      'clr_4',
      0.9
    )}),
    url('/home/testimony-bg.webp')`};
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

// ======= title -->
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

// ======= parent card section -->
export const TestimonySection = styled.div`
  gap: 1.5vw;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: 'card_1 card_2 card_3';

  @media (max-width: 1100px) {
    grid-template-areas:
      'card_1'
      'card_2'
      'card_3';
    gap: 100px;
  }
`;

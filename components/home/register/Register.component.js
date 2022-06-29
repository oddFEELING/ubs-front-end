/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.section`
  gap: 3vh;
  width: 100%;
  display: flex;
  text-align: center;
  padding: 50px 10vw;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: max(40vh, 500px);
`;

export const Title = styled.h3`
  font-weight: 900;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.dk_1};
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

export const Content = styled.p`
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  color: ${({ theme }) => theme.alpha('dk_1', 0.5)};
`;

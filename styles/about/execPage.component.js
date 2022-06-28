/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.main`
  gap: 3vh;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 50px;
  min-height: 800px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(10, 10, 10, 0.8),
      rgba(10, 10, 10, 0.8)
    ),
    url('/about/about-hero.webp');

  h1 {
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.colors.lt_2};
    font-size: ${({ theme }) => theme.fonts.size.xl};
    font-family: ${({ theme }) => theme.fonts.pri};

    b {
      color: ${({ theme }) => theme.colors.clr_2};
      text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: ${({ theme }) => theme.fonts.size.md};
      padding: 10px;
    }
  }
`;

export const LogoDiv = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  position: absolute;
  align-items: center;
  left: 80px;
  top: 50px;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.sd_5};

  @media (max-width: 1024px) {
    flex-direction: column;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
  }
`;

/** 🌹oddFEELING */

import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  z-index: 100;
  display: flex;
  position: fixed;
  padding: 1vh 10vw;
  align-items: center;
  height: max(13vh, 85px);
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.sec};
  transition: ${({ theme }) => theme.transition.smooth};

  // ======= scrolled -->
  ${({ scrolled }) =>
    scrolled &&
    css`
      padding: 0.5vh 8vw;
      height: max(8vh, 60px);
      backdrop-filter: blur(5px);
      background-color: ${({ theme }) => theme.alpha('lt_1', 0.8)};
    `}

  .link {
    font-weight: 500;
    padding-bottom: 8px;
    position: relative;
    color: ${({ theme }) => theme.colors.lt_1};
    font-size: ${({ theme }) => theme.fonts.size.md};

    &::after {
      content: '';
      left: 0;
      bottom: 0;
      width: 0;
      height: 2.5px;
      position: absolute;
      transition: ${({ theme }) => theme.transition.smooth};
      background-color: #4bc7e2;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

// ======= logo div -->
export const LogoDiv = styled.span`
  width: 60px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  height: max(50px, 50%);
`;

// ======= desktop nav -->
export const DesktopLinkDiv = styled.nav`
  gap: 3%;
  width: 70%;
  display: flex;
  padding: 1% 0;
  align-items: center;
  justify-content: flex-end;
  transition: ${({ theme }) => theme.transition.smooth};

  .scrolled {
    color: ${({ theme }) => theme.colors.dk_1};
  }
`;

// ======= mobile nav -->
export const NavBtn = styled.div`
  height: 80%;
  display: flex;
  position: relative;
  align-items: center;
  width: max(10%, 60px);
  justify-content: center;
`;

export const MobileLinkDiv = styled.nav`
  top: 0;
  right: 0;
  width: 0;
  opacity: 0;
  gap: 5%;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  pointer-events: none;
  flex-direction: column;
  justify-content: center;
  transition: ${({ theme }) => theme.transition.smooth};
  background-color: ${({ theme }) => theme.colors.dk_1};

  ${({ open }) =>
    open &&
    css`
      width: 100%;
      opacity: 1;
      pointer-events: auto;
    `}

  .link {
    position: relative;
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }
`;

export const MobMenuTitle = styled.h3`
  top: 5%;
  left: 5%;
  position: absolute;
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

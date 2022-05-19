/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  min-height: 500px;
  padding-top: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.clr_4};
`;

//=============================================>  title section
export const TitleWrapper = styled.div`
  gap: 40px;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px 5vw;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  color: ${({ theme }) => theme.colors.lt_2};
`;

export const LogoDiv = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

//=============================================>  Bottom dark bar
export const DarkSection = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dk_1};
`;

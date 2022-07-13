/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.footer`
  gap: 50px;
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

//=============================================>  Middle section
export const MiddleSection = styled.div`
  gap: 40px;
  width: 100%;
  display: grid;
  padding: 0 8vw;
  align-items: center;
  grid-template-areas:
    'card_1 card_2'
    'card_1 card_2'
    'card_1 card_3';
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-areas:
      'card_1'
      'card_2'
      'card_3';
    padding: 0 20px;
  }
`;

// ======= Contact section -->
export const ContactDiv = styled.div`
  gap: 5px;
  min-width: 300px;
  height: 100%;
  display: flex;
  grid-area: card_1;
  align-self: start;
  padding-left: 40px;
  /* background-color: red; */
  flex-direction: column;
  justify-content: space-between;
  border-left: thin solid ${({ theme }) => theme.colors.lt_1};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ContactCard = styled.div`
  gap: 25px;
  width: 100%;
  height: auto;
  display: flex;

  @media (max-width: 1024px) {
    width: 100%;
    height: 1 00px;
  }
`;

export const ContactText = styled.span`
  gap: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 600;
    padding-left: 15px;
    font-size: ${({ theme }) => theme.fonts.size.md};
    color: ${({ theme }) => theme.colors.lt_1};
    border-left: 2px solid ${({ theme }) => theme.colors.clr_2};
  }

  p {
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.sec};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.alpha('lt_2', 0.8)};
  }
`;
// ======= subscribe section -->
export const SubscribeDiv = styled.div`
  gap: 20px;
  height: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  width: max(100%, 450px);
  color: ${({ theme }) => theme.colors.lt_1};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// ======= socials secction -->
export const SocialDiv = styled.div`
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  grid-area: card_3;
  letter-spacing: 1px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.lt_1};

  .icon-wrapper {
    display: flex;
    padding: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.transition.smooth};
    border: 2px solid ${({ theme }) => theme.colors.clr_2};

    &:hover {
      transform: translateY(-5px) scale(1.03);
      border: 2px solid ${({ theme }) => theme.alpha('lt_1', 0.7)};
    }
  }
`;

export const SocialWrapper = styled.div`
  gap: 30px;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-left: thin solid ${({ theme }) => theme.colors.lt_1};
`;
//=============================================>  Bottom dark bar
export const DarkSection = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dk_1};
`;

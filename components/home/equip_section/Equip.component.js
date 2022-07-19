/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.section`
  gap: 2vw;
  width: 100%;
  display: flex;
  min-height: 500px;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: max(60px, 13vh) 10vw;

  @media (max-width: 1024px) {
    gap: 2vh;
    flex-direction: column;
    padding: max(30px, 6vh) 5vw;
  }
`;

// ======= wrapper for image -->
export const ImgWrapper = styled.div`
  width: 500px;
  display: flex;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  .img {
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;

// ======= wrapper for text -->
export const TextWrapper = styled.div`
  gap: 4vh;
  width: 38vw;
  display: flex;
  padding: 2vh 5%;
  min-height: 55vh;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 8%;
    height: auto;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
  }
`;

// ======= title -->
export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dk_1};
  font-size: ${({ theme }) => theme.fonts.size.xl};

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }
`;

// ======= content -->
export const Content = styled.div`
  width: 100%;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;

// ======= bg shapes -->
export const Shape__1 = styled.div`
  top: -3vh;
  left: 3vw;
  display: flex;
  position: absolute;
  align-items: center;
  width: max(10vw, 100px);
  height: max(18vh, 100px);
  justify-content: center;
`;

export const Shape__2 = styled.div`
  bottom: -4.5vh;
  right: 0;
  display: flex;
  position: absolute;
  align-items: center;
  width: max(10vw, 100px);
  height: max(15vh, 100px);
  justify-content: center;
`;

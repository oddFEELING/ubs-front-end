/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.section`
  z-index: 2;
  width: 100%;
  display: flex;
  height: max(700px, 100vh);
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/home/facility-img.webp');
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: center;
`;

// ======= content wrapper -->
export const ContentWrapper = styled.section`
  gap: 3vh;
  width: 50%;
  height: 100%;
  display: flex;
  padding: 7% 5%;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.alpha('clr_4', 0.9)};

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

// ======= title  -->
export const Title = styled.h2`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

// ======= list wrapper -->
export const ListWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  height: 80%;
  margin-left: 3vw;
  justify-content: space-evenly;
  flex-direction: column;
`;

// ======= list container -->
export const ListItem = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  padding: 3px;
  gap: min(5vw, 20px);
  align-items: center;
  justify-content: space-between;
`;

// ======= text area  -->
export const ListTextWrapper = styled.div`
  width: 85%;
  gap: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// ======= title for item -->
export const ListTitle = styled.h3`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  color: ${({ theme }) => theme.colors.lt_1};
`;

// ======= text content  -->
export const ListContent = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-family: ${({ theme }) => theme.fonts.sec};
  color: ${({ theme }) => theme.alpha('lt_2', 0.7)};

  @media (max-width: 1440px) {
    font-size: ${({ theme }) => theme.fonts.size.sm};
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

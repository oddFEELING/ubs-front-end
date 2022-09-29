/** 🌹oddFEELING */

import styled from 'styled-components';

export const Contaoiner = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GalleryWrapper = styled.section`
  gap: 8px;
  width: 100%;
  display: flex;
  min-height: 500px;
  padding: 50px 4px;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dk_1};
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }
`;

// ======= Tag wrapper -->
export const TagWrapper = styled.div`
  gap: 10px;
  display: flex;
  margin-bottom: 60px;
  max-width: 80%;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
`;

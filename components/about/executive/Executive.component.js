/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

//=============================================>  RENDER
const ExecutiveComponent = () => {
  return (
    <Container>
      <ExecCard style={{ gridArea: 'card_1' }}>
        <Image
          src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
          layout='fill'
        />
        <TitleCard>
          <h3>Dr. Aimasiko</h3>
          <p>Principal</p>
        </TitleCard>
      </ExecCard>

      <ExecCard style={{ gridArea: 'card_2' }}>
        <Image
          src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
          layout='fill'
        />
        <TitleCard>
          <h3>Dr. Aimasiko</h3>
          <p>Principal</p>
        </TitleCard>
      </ExecCard>

      <ExecCard style={{ gridArea: 'card_3' }}>
        <Image
          src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
          layout='fill'
        />
        <TitleCard>
          <h3>Dr. Aimasiko</h3>
          <p>Principal</p>
        </TitleCard>
      </ExecCard>
    </Container>
  );
};

export default ExecutiveComponent;

//=============================================>  COMPONENT
const Container = styled.section`
  gap: 4vw;
  width: 100%;
  height: auto;
  display: grid;
  padding: 150px 60px;
  background-color: ${({ theme }) => theme.colors.lt_2};
  grid-template-areas: ' card_1 card_2 card_3';
  justify-content: center;
`;

//  component card
const ExecCard = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  position: relative;
  align-items: center;
  background-color: red;
  justify-content: center;
  box-shadow: 20px 20px 0 ${({ theme }) => theme.colors.clr_2};
`;

const TitleCard = styled.div`
  width: 80%;
  bottom: -40px;
  display: flex;
  height: 80px;
  position: absolute;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lt_1};
  background-color: ${({ theme }) => theme.colors.clr_4};

  h1 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.size.md};
  }

  p {
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.sec};
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;

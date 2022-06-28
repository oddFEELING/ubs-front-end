/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

//=============================================>  # RENDER
const ExecCardComponent = (props) => {
  const { image, name, content, title, left, color } = props;
  return (
    <Container left={left}>
      <Content>
        <Image src={image} alt='' objectFit='cover' layout='fill' priority />
      </Content>
      <Content color={color} shadow></Content>
    </Container>
  );
};

export default ExecCardComponent;

//=============================================>  # COMPOPNENT
const Container = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: ${({ left }) => (left ? 'row' : 'row-reverse')};
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  position: relative;
  background-color: gold;
  background-color: ${({ theme }) => theme.colors.dk_1};
  box-shadow: ${({ shadow, theme }) => shadow && theme.shadow.sd_5};

  @media (max-width: 1024px) {
    width: 100%;
    height: 400px;
  }
`;

/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

//=============================================>  RENDER
const ExecCardComponent = ({ ...props }) => {
  const { imageSrc, name, position, left, firstItem } = props;
  return (
    <Container left={left} firstItem={firstItem}>
      {/* ====== Image section */}
      <ImageWrapper>
        <Image src={imageSrc} alt='' loading='lazy' layout='fill' />
      </ImageWrapper>

      {/* ====== text section */}
      <TextWrapper left={left}>
        <h1>{name}</h1>
        <h3>{position}</h3>
      </TextWrapper>
    </Container>
  );
};

export default ExecCardComponent;

//=============================================>  COMPONENT
const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: ${({ firstItem }) => (firstItem ? 0 : '-60px')};
  justify-content: center;
  flex-direction: ${({ left }) => (left ? 'row-reverse' : 'row')};
`;

const ImageWrapper = styled.div`
  gap: 50px;
  width: 400px;
  display: flex;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 4px solid grey;
  background-color: green;
  box-shadow: ${({ theme }) => theme.shadow.sd_5};
`;

const TextWrapper = styled.div`
  width: 40%;
  height: 300px;
  display: flex;
  padding: 0 20px;
  padding: 60px 30px;
  flex-direction: column;
  justify-content: center;
  /* border: thin solid grey; */
  box-shadow: ${({ theme }) => theme.shadow.sd_2};
  text-align: ${({ left }) => (left ? 'right' : 'left')};
  background-color: ${({ theme }) => theme.colors.lt_2};

  h1 {
    font-weight: 800;
    letter-spacing: 2px;
    position: relative;
    color: ${({ theme }) => theme.colors.dk_1};
    font-size: ${({ theme }) => theme.fonts.size.xl};

    &::after {
      content: '';
      width: 80%;
      height: 5px;
      position: absolute;
      border-radius: 50%;
      bottom: 0;
    }
  }

  h3 {
    font-weight: 600;
    letter-spacing: 2px;
    font-family: ${({ theme }) => theme.fonts.sec};
    color: ${({ theme }) => theme.colors.dk_2};
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }
`;

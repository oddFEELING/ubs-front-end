/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const TestimonyCard = ({ ...props }) => {
  const { img, title, content, name, delay, aos, area } = props;
  return (
    <Container data-aos={aos} data-aos-delay={delay} area={area}>
      {/* ====== title */}
      <Title>{title}</Title>
      {/* ====== content */}
      <p className='font-secondary p-3 sm:text-md text-lg '>{content}</p>

      {/* ====== Parent image */}
      <PicFrame>
        <Image
          src='https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          layout='fill'
        />
      </PicFrame>
    </Container>
  );
};

export default TestimonyCard;

const Container = styled.div`
  display: flex;
  height: 420px;
  gap: 15px;
  position: relative;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  padding: 40px 15px;
  flex-direction: column;
  width: max(20vw, 350px);
  color: ${({ theme }) => theme.colors.lt_2};
  box-shadow: ${({ theme }) => theme.shadow.sd_5};
  background-color: ${({ theme }) => theme.alpha('clr_5', 0.75)};
`;

const PicFrame = styled.div`
  width: 120px;
  height: 120px;
  bottom: -60px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: center;
  border-radius: 99999px;
  justify-content: center;
  background-color: green;
  grid-area: ${({ area }) => area};
  box-shadow: ${({ theme }) => theme.shadow.sd_3};

  img {
    object-fit: cover;
    object-position: top;
  }
`;

const Title = styled.h4`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.pri};
  font-size: ${({ theme }) => theme.fonts.size.lg};
`;

const Content = styled.p`
  width: 80%;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};
  color: ${({ theme }) => theme.alpha('lt_1', 0.7)};
`;

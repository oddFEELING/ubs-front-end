/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { elementsStore } from '../../../../context/element.context';
import Button from '../../../lib/button/Button.component';

//=============================================>  COMPONENT
const Slide = ({ ...props }) => {
  const router = useRouter();
  const { title, desc, img, buttons } = props;
  const { footerElement } = elementsStore();

  return (
    <Container img={img}>
      <TextArea>
        <Title>{title && title}</Title>
        <Desc>{desc && desc}</Desc>
      </TextArea>

      <BtnArea>
        {buttons &&
          buttons.map((data, index) => {
            return (
              <Button
                key={index}
                text={data.text}
                color={data.color}
                hv_color={data.hv_color}
                bg={data.bg}
                hv_bg={data.hv_bg}
                onClick={() => data.onclick(footerElement, router)}
              />
            );
          })}
      </BtnArea>
    </Container>
  );
};

export default Slide;

//=============================================>  STYLE
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ img, theme }) =>
    `linear-gradient(to bottom,${theme.alpha('dk_1', 0.4)}, ${theme.alpha(
      'dk_1',
      0.6
    )}), url(${
      img
        ? img
        : 'https://images.unsplash.com/photo-1534269222346-5a896154c41d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmVzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
    })`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  padding: max(12vh, 80px) 16vw;

  @media screen and (max-width: 800px) {
    padding: max(12vh, 80px) 8vw;
  }
`;

// ======= text section -->
const TextArea = styled.section`
  gap: 1vh;
  width: 80%;
  display: flex;
  margin-bottom: 5vh;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size.xxl};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
`;

const Desc = styled.h3`
  font-weight: 400;
  letter-spacing: 2px;
  font-family: ${({ theme }) => theme.fonts.sec};
  color: ${({ theme }) => theme.alpha('lt_1', 0.7)};
  font-size: ${({ theme }) => theme.fonts.size.md};
`;

// ======= button section -->
const BtnArea = styled.div`
  display: flex;
  gap: 1.5vw;
`;

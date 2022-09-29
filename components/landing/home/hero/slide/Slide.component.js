/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { elementsStore } from '../../../../../global/element.global';
import Button from '../../../../lib/button/Button.component';

//=============================================>  COMPONENT
const Slide = ({ ...props }) => {
  const router = useRouter();
  const { title, desc, img, buttons } = props;
  const { footerElement } = elementsStore();

  return (
    <Container img={img}>
      <TextArea>
        {/* ====== ## TITLE TEXT */}
        <h2 className=' text-white font-primary font-bold mb-3 m-0 text-4xl md:text-7xl'>
          {title && title}
        </h2>

        {/* ====== ## DESCRIPTION TEXT */}
        <p className='text-gray-300 font-secondary text-xl md:text-2xl m-0'>
          {desc && desc}
        </p>
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

// ======= button section -->
const BtnArea = styled.div`
  display: flex;
  gap: 1.5vw;
`;

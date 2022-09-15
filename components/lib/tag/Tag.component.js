/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { galleryStore } from '../../../global/gallery.global';

//=============================================>  RENDER
const TagComponent = ({ text }) => {
  const { setSelected, selected } = galleryStore();

  // ======= Tag click -->
  const handleClick = () => {
    setSelected(text);
  };

  return (
    <Container
      data-aos='slide-up'
      selected={selected === text ? true : false}
      onClick={handleClick}
    >
      {text.toUpperCase()}
    </Container>
  );
};

export default TagComponent;

//=============================================>  COMPONENT
const Container = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  align-items: center;
  border: thin solid #d0d0d0;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lt_1};
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  transition: ${({ theme }) => theme.transition.smooth};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadow.sd_2};
  }

  ${({ selected }) =>
    selected === true &&
    css`
      background-color: ${({ theme }) => theme.colors.dk_2};
      color: ${({ theme }) => theme.colors.lt_2};
    `}
`;

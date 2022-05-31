/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { galleryStore } from '../../../context/gallery.context';

//=============================================>  RENDER
const TagComponent = ({ text, value }) => {
  const { setSelected, selected } = galleryStore();

  // ======= Tag click -->
  const handleClick = () => {
    setSelected(value);
  };

  return (
    <Container
      selected={selected === value ? true : false}
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
    background-color: ${({ theme, selected }) =>
      !selected && theme.alpha('dk_2', 0.1)};
  }

  ${({ selected }) =>
    selected === true &&
    css`
      background-color: ${({ theme }) => theme.colors.dk_2};
      color: ${({ theme }) => theme.colors.lt_2};
    `}
`;

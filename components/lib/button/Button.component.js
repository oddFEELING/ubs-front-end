/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import styled from 'styled-components';

//=============================================>  COMPONENT
const Button = ({ ...props }) => {
  const { text, bg, color, hv_bg, hv_color, sx, onClick } = props;
  return (
    <Container
      bg={bg}
      color={color}
      hv_color={hv_color}
      hv_bg={hv_bg}
      style={sx}
      onClick={onClick}
    >
      {text}
    </Container>
  );
};

export default Button;

//=============================================>  STYLE
const Container = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  padding: 1% 1%;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.sd_3};
  /* font-size: ${({ theme }) => theme.fonts.size.md}; */
  transition: ${({ theme }) => theme.transition.smooth};
  color: ${({ color, theme }) => (color ? color : theme.colors.dk_1)};
  background-color: ${({ bg, theme }) => (bg ? bg : theme.colors.lt_1)};

  &:hover {
    color: ${({ color, hv_color }) => (hv_color ? hv_color : color)};
    background-color: ${({ bg, hv_bg }) => (hv_bg ? hv_bg : bg)};
    transform: translateY(-5px);
  }

  @media (max-width: 800px) {
    width: 130px;
    height: 50px;
  }
`;

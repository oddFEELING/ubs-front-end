/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

//=============================================>  COMPONENT
const Separator = ({ ...props }) => {
  const { right, left, top, bottom, width, height, delay, red, sx } = props;

  return (
    <Container
      right={right}
      left={left}
      top={top}
      bottom={bottom}
      width={width}
      height={height}
      data-aos='zoom-out-right'
      data-aos-delay={delay}
      red={red}
      style={{ ...sx }}
    />
  );
};

export default Separator;

//=============================================>  STYLE

const Container = styled.span`
  border-radius: 5vw;
  width: ${({ width }) => width};
  margin-top: ${({ top }) => top};
  height: ${({ height }) => height};
  margin-left: ${({ left }) => left};
  margin-right: ${({ right }) => right};
  margin-bottom: ${({ bottom }) => bottom};
  background-color: ${({ theme }) => theme.colors.clr_4};

  ${({ red }) =>
    red &&
    css`
      background-color: ${({ theme }) => theme.colors.clr_1};
    `}
`;

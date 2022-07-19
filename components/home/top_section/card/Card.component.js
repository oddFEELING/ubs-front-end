/** 🌹oddFEELING */

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

//=============================================>  COMPONENT
const Card = ({ ...props }) => {
  const { title, icon, content, bg, sx, delay } = props;
  return (
    <Container style={sx} bg={bg} data-aos='fade-up' data-aos-delay={delay}>
      <Icon icon={icon} color='white' height='60' />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default Card;

//=============================================>  STYLE
const Container = styled.div`
  gap: 6%;
  display: flex;
  padding: 10% 2%;
  text-align: center;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  width: max(250px, 20vw);
  height: max(450px, 30vh);
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.lt_1};
  background-color: ${({ theme, bg }) => bg && bg(theme)};

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  a {
    transition: 300ms all ease-in-out;
    &:hover {
      color: cyan;
    }
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.size.lg};
`;

const Content = styled.p`
  width: 70%;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};
  color: ${({ theme }) => theme.alpha('lt_1', 0.7)};
`;

/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import Button from '../../../lib/button/Button.component';

//=============================================>  COMPONENT
const OfferCard = ({ ...props }) => {
  const theme = useTheme();
  const { img, title, content, sx, clr } = props;
  return (
    <Container bg={img} style={sx}>
      <Title data-aos='fade-right'>{title}</Title>
      <Content data-aos='fade-right' data-aos-delay='300'>
        {content}
      </Content>
      <Button
        text='View more'
        sx={{
          width: '50%',
          height: '12%',
          backgroundColor: clr,
          color: '#f3f4ff',
        }}
        onClick={() => alert('Info coming soon...')}
      />
    </Container>
  );
};

export default OfferCard;

//=============================================>  STYLE
const Container = styled.div`
  gap: 4%;
  display: flex;
  padding: 5% 8%;
  flex-direction: column;
  width: max(300px, 20vw);
  height: max(500px, 35vh);
  background: ${({ bg }) =>
    `linear-gradient(to bottom, rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.8)),
    url(${bg})`};
  background-size: cover;
  justify-content: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  transition: ${({ theme }) => theme.transition.smooth};
  box-shadow: ${({ theme }) => theme.shadow.sd_4};

  @media (max-width: 1024px) {
    width: 80%;
  }

  &:hover {
    background: ${({ bg }) =>
      `linear-gradient(to bottom, rgba(0, 0, 0, 0.55),rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)),
    url(${bg})`};
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lt_1};
  font-size: ${({ theme }) => theme.fonts.size.lg};
`;

const Content = styled.p`
  font-weight: 400;
  margin-top: -1vh;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};
  color: ${({ theme }) => theme.alpha('lt_1', 0.7)};
`;

import React from 'react'
import styled from 'styled-components'

import serverErrorImage from '../assets/images/500.png'

const Error500Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 50px;
`;

const Image = styled.img`
  width: 778px;
  max-height: 308px;
  margin-bottom: 80px;
  object-fit: contain;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 900px;
  margin-left: 121px;
`;

const Title = styled.h1`
  max-width: 662px;
  color: var(--anthracite-color);
  font-size: 60px;
  line-height: 110%;
  margin-bottom: 56px;
`;

const SupportSpan = styled.span`
  font-size: 24px;
  line-height: auto;
  color: var(--blue-color);
`;

const Description = styled.p`
  max-width: 662px;
  color: var(--anthracite-color);
  font-size: 24px;
  line-height: auto;
  text-align: left;

`;

const Error500Page = () => {
  return (
    <Error500Container>
      <Image src={serverErrorImage} alt="Server Error" />
      <TextContainer>
        <Title>Сервер не отвечает</Title>
        <Description>
          Пожалуйста, попробуйте зайти позже. Если ошибка не исчезнет, 
          <SupportSpan> свяжитесь с поддержкой</SupportSpan>
        </Description>
      </TextContainer>
    </Error500Container>
  )
}

export default Error500Page

import React from 'react'
// import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import notFoundImage from '../assets/images/404.png'

const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px;
`;

const Title = styled.h1`
  max-width: 662px;
  color: var(--anthracite-color);
  font-size: 60px;
  line-height: 110%;
  margin-bottom: 28px;
`;

const Description = styled.p`
  max-width: 662px;
  color: var(--anthracite-color);
  font-size: 24px;
  line-height: auto;
  margin-bottom: 56px;
`;

const SupportSpan = styled.span`
  font-size: 24px;
  line-height: auto;
  color: var(--blue-color);
`;

const BackButton = styled.button`
  height: 64px;
  border: none;
  outline: none;
  background: var(--blue-color);
  width: 424px;
  padding: 20px;
  border-radius: 8px;
  font-size: 24px;
  line-height: auto;
  color: var(--white-color);
  cursor: pointer;
  text-align: center;
`;

const Image = styled.img`
  width: 662px;
  max-height: 320px;
  margin-bottom: 80px;
`;

const PageNotFound = () => {
  //   const history = useHistory()

  //   const goBack = () => {
  //     history.goBack()
  //   }

  return (
    <NotFoundContainer>
      <Image src={notFoundImage} alt="Not Found" />
      <Title>Страница не найдена</Title>
      <Description>
        Кажется, такой страницы не существует. Вы можете вернуться назад или
        обратиться в <SupportSpan>поддержку за помощью.</SupportSpan>
      </Description>
      <BackButton>Назад</BackButton>
    </NotFoundContainer>
  )
}

export default PageNotFound

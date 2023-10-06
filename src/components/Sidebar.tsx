import React from 'react'
import styled from 'styled-components'
import ButtonMenu from './ButtonMenu'

import logo from '../assets/images/LogoBlue.png'
import Cards from '../assets/images/Cards.svg'
import Icon from '../assets/images/Icon.svg'
import Question from '../assets/images/Question.svg'
import Vector from '../assets/images/Vector.svg'
import Graph from '../assets/images/Graph.svg'

const SidebarWrapper = styled.div`
  background-color: var(--dark-blue-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 100%;
  padding-bottom: 45px;
`;

const Logo = styled.div`
  width: 100%;
  height: 100%;
  max-width: 180px;
  max-height: 85px;
  background: url(${logo}) no-repeat left/contain;
  margin-top: 41px;
  margin-bottom: 108px;
`;

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const SidebarUl = styled.ul`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SidebarLi = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-top: 36px;
  &:first-of-type {
    padding-top: 0;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <SidebarDiv>
        <SidebarUl>
          <SidebarLi>
            <ButtonMenu src={Graph} text={'Прогноз'} />
          </SidebarLi>
          <SidebarLi>
            <ButtonMenu src={Vector} text={'Аналитика'} />
          </SidebarLi>
          <SidebarLi>
            <ButtonMenu src={Cards} text={'Тех. карты'} />
          </SidebarLi>
        </SidebarUl>
        <SidebarUl>
          <SidebarLi>
            <ButtonMenu src={Question} text={'FAQ'} />
          </SidebarLi>
          <SidebarLi>
            <ButtonMenu src={Icon} text={'Поддержка'} />
          </SidebarLi>
        </SidebarUl>
      </SidebarDiv>
    </SidebarWrapper>
  )
}

export default Sidebar

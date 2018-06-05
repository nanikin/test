import React from 'react';
import styled from 'styled-components';
import HeaderPhoto from '../../img/photo.png';
import HeaderArrow from '../../img/arrow-down.svg';

import { Grid, Row, Col } from 'react-flexbox-grid';


const Header = styled.header`
  font-family: 'Fira Sans';
  color: #FFFFFF;
  background: url('${HeaderPhoto}') no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`
const HeaderText = styled.p`
  padding-top: 73px;
  
  font-weight: bold;
  font-size: 30px;
`

const HeaderSubtext = styled.p`
  padding-top: 10px;

  font-weight: 300;
  font-size: 30px;
  `
  
const HeaderWrapper = styled.a`
  text-decoration: none;
`

const HeaderButton = styled.button`
  color: #000000;
  background-color: #FFFFFF;
  border-radius: 14px;
  border: none;
  font-size: 20px;
  font-family: inherit;

  height: 61px;
  width: 229px;
    
  display: block;
  margin-left: auto;
  margin-right: auto;

`
const HeaderImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  padding-top: 42px;
  padding-bottom: 20px; 
`

export default () => (
  <Header>
    <Grid>
      <Row>
        <Col xs={12} lg={10}>
          <HeaderText>
            Нижегородская компания «SIP» готова оказать юридическую консультацию, 
            представительство в суде, и поможет решить вашу проблему. Наша команда юристов 
            выиграла 92 % дел за 5 лет.
          </HeaderText>
        </Col>  
      </Row>
      <HeaderSubtext>
        Оставьте заявку и мы обязательно свяжемся с вами
      </HeaderSubtext>
      <HeaderWrapper>
        <HeaderButton>Оставить заявку</HeaderButton>
      </HeaderWrapper>
      <HeaderImg src={HeaderArrow} />
    </Grid>  
  </Header>
);

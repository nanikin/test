import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import { priceCard } from '../../backend';
import LeftHand from '../../img/hand-1.svg';
import RightHand from '../../img/hand-2.svg';

import Cards from './Cards';
import Team from './Team';

import PriceDoc from './Price.docx'

const Wrapper = styled.section`
  background-color: #F8F8F8;
  margin-top: 30px;
`

const Head = styled.h2`
  font-family: 'Noto Serif';
  font-size: 42px;
  font-weight: bold;
  text-align: center;

  padding-top: 80px;
`

const Img = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 100px;
`
const Link = styled.a`
  display: block;
  margin-right: auto;
  margin-left: auto;
`

const Button = styled.button`
  background-color: #0A8DEC;
  border-radius: 14px;
  color: #FFFFFF;
  width: 322px;
  height: 112px;
  font-family: inherit;
  font-size: 22px;
  border: none;

`
const Line = styled.hr`
  margin-top: 100px;
  margin-bottom: 100px;
`

class Price extends Component {
  render () {
    return(
      <Wrapper>
        <Grid>
          <Head>Цены за услуги</Head>
          <Cards items={priceCard} />
          <ButtonWrapper>
            <Row>
              <Img src={LeftHand} />
              <Link href={PriceDoc}><Button>Посмотреть все цены</Button></Link>
              <Img src={RightHand} />
            </Row>
          </ButtonWrapper>
          <Line />
          <Team />
        </Grid>
      </Wrapper>
    );
  }
}

export default Price;

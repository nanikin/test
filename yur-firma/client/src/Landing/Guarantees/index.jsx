import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PieChart from '../../img/pie-chart.svg';
import Chart from '../../img/chart.svg';
import Triangles from '../../img/triangles.svg';

import { feedback } from '../../backend';
import CardGuarantees from './CardGuarantees';

const Wrapper = styled.section`
  background-color: #2E2E2E;
  color: #FFFFFF;

  margin-top: 100px;
`

const Head = styled.h2`
  font-family: 'Noto Serif';
  font-size: 42px;
  text-align: center;

  padding-top: 30px;
`

const Text = styled.p`
  font-family: 'Fira Sans';
  font-size: 19px;
  text-align: center;
`

const Img = styled.img`
  padding-top: 60px;

  height: 128px;
  width: 128px;

  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    display: none;
  }
`

class Guarantees extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>  
        <Head>Гарантии</Head>
          <Row center="xs">
            <Img src={PieChart} />
            <Col xs={12} md={8}>
              <Text>
              Ни одна юридическая компания не может гарантировать вам 100% результат. 
              Это связано с тем, что приговор по тому или иному делу выносит судья, у которого может 
              сложиться свое мнение, которое имеет место быть в рамках правового поля. <br />
              Единственной гарантией может служить договор об оказании юридических услуг, 
              то есть четкое выполнение условий договора со стороны нашей компании.
              </Text>
            </Col>
            <Img src={Chart} />
          </Row>
          <Img src={Triangles} />
          <Head>Отзывы</Head>
          <Row>
            <CardGuarantees items={feedback} />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Guarantees;

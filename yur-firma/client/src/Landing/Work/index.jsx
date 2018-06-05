import React from 'react';
import styled from 'styled-components';
import Points from './Points';

import { Grid, Row, Col } from 'react-flexbox-grid';

import ImageF from '../../img/just2.svg';
import ImageS from '../../img/just3.svg';

import { workPoints } from '../../backend';

const Work = styled.section`
  margin-top: 100px;
`

const WorkHead = styled.h2`
  text-align: center;
  font-size: 42px;
  font-family: 'Noto Serif';
`

const WorkDescribe = styled.div`
  font-family: 'Fira Sans';
  font-size: 20px;
`

const WorkImg = styled.img`
  padding-top: 100px;
  height: 512px;
  width: 512px;

  @media (max-width: 768px){
    height: 50%;
    width: 50%;

    :last-child {
      display: none;
    }
  }
`

export default () => (
  <Work>
    <WorkHead>Как мы работаем</WorkHead>
    <Grid>
    <WorkDescribe>
      <Row center="xs md" start="lg">
        <Col lg={6} xs={12}>
          <WorkImg src={ImageF} />
          <WorkImg src={ImageS} />
        </Col>
        <Col lg={6} xs={12}>
          <Points items={workPoints} />
        </Col>
      </Row>  
    </WorkDescribe>


    </Grid>
  </Work>
);

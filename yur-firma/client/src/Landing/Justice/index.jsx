import React from 'react';
import styled from 'styled-components';
import JusticeImage from '../../img/just.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Justice = styled.section`
  font-family: 'Noto Serif';
  margin-top: 120px;
`

const JusticeHeader = styled.h2`
  font-size: 42px;
`

const JusticeText = styled.p`
  font-size: 22px;
`

const JusticeImg = styled.img`
  @media (max-width: 768px) {
    height: 75%;
    width: 75%;
  }
`

export default () =>
(
  <Justice>
    <Grid>
    <Row center="xs md" start="lg">
      <Col xs={12} lg={7}>
      <div>
        <JusticeHeader>Что такое «SIP»</JusticeHeader>
        <JusticeText>
          Юридическая компания Special Intellect Protection в Нижнем Новгороде была
          основана Алексеем Станиславовичем Дубинкиным, чей опыт работы в юридической 
          сфере достигает более 8 лет. <br />
          Раньше Алексей служил на государственной службе, но спустя некоторое
          время основал собственную компанию, чтобы оказывать юридические 
          консультации и услуги населению.
        </JusticeText>
      </div>
      </Col>
      <Col xsOffset={1} lgOffset={1}>
        <JusticeImg src={JusticeImage} />
      </Col>  
    </Row>
    </Grid>
  </Justice>
);

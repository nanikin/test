import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import CardCertificate from './CardCertificate';
import { certificates } from '../../backend';

const Wrapper = styled.section``

const Head = styled.h2`
  font-family: 'Noto Serif';
  font-size: 42px;
  text-align: center;
`

class Certificate extends Component {
  render(){
    return(
      <Wrapper> 
        <Grid>
          <Head>Сертификаты</Head>  
          <Row>
            <CardCertificate items={certificates} />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Certificate;

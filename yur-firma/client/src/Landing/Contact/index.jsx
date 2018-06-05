import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import CardContact from './CardContact';
import { contactCard } from '../../backend';
import Map from './Map';

const Wrapper = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
`

const Head = styled.h2`
  font-family: 'Noto Serif';
  font-size: 42px;
  font-weight: bold;
  text-align: center;

`

class Contact extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>
          <Head>Контакты</Head>
            <CardContact items={contactCard}/>
            <Map />
        </Grid>
      </Wrapper>
    );
  }
}

export default Contact;

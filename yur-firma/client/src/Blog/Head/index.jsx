import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid'; 
import BlogPhoto from '../../img/blog-photo.png';

const Wrapper = styled.section`
  background: url("${BlogPhoto}") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 70vh;
  font-family: 'Fira Sans';
  color: #FFFFFF;

`
const HeadText = styled.h2`
  font-size: 42px;
  margin-top: 150px;
  font-weight: bold;
`
const Text = styled.p`
  font-size: 30px;
`

class Head extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12} lg={6}>
              <HeadText>Блог</HeadText>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={8}>
              <Text>Читайте последние новости в нашем блоге</Text>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Head;

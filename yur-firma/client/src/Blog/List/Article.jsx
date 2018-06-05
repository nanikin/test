import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PostPhoto from '../../img/post-photo.png';

const Wrapper = styled.div`
  font-family: 'Fira Sans';
  background-color: #ECECEC;
  border-radius: 14px;

  display: block;
  margin-left: auto;
  margin-right: auto;


  &:hover,
  &:active,
  &:focus {
    transition: .3s ease-in;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .3);
  }
`
const Img = styled.img`

  height: auto;
  width: 100%;

  padding-top: 40px;
`

const Head = styled.h3`
  font-size: 32px;
  font-weight: bold;
`

const Text = styled.p`
  color: #0A8DEC;
  font-size: 18px;
  padding-bottom: 30px;
`

const Link = styled.a`
  text-decoration: none;
`

class Article extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>
          <Row start="xs">
            <Col xs={12} lg={12}>
              <Img src={PostPhoto} />
            </Col>
          </Row>
          <Head>Название статьи</Head>
          <Link><Text>Читать полностью</Text></Link>
        </Grid>
      </Wrapper>
    );
  }
}

export default Article;

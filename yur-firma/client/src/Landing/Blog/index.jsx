import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import BgImage from '../../img/blog.png';
import ArrowPoint from '../../img/arrow-to-right.svg';

const Wrapper = styled.section`
  margin-top: 100px;
  background: url(${BgImage}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;

  color: #FFFFFF;
`

const Head = styled.h2`
  font-family: 'Fira Sans';
  font-size: 42px;
  font-weight: bold;

  padding-top: 100px;
`
const Text = styled.p`
  font-family: inherit;
  font-size: 30px;
  font-weight: light;
`

const Arrow = styled.img`
  margin-left: 10px;
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`

class Blog extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>
          <Head>Бесплатная юридическая консультация – как выпутываться из сложных жизненных ситуаций?</Head>
          <Row>
            <Text>Рассказываем в нашем <strong><LinkTo to="/blog">блоге</LinkTo></strong></Text>
            <Arrow src={ArrowPoint} />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Blog;

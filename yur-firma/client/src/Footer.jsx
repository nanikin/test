import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  font-family: 'Fira Sans';
  font-size: 20px;
`

const Line = styled.hr``

const Text = styled.p``

const TextWrapper = styled.div`
  margin-top: 30px;
  color: #ABABAB;
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Contact = styled.p`

  font-weight: bold;
`

class Footer extends Component {
  render(){
    return(
      <Wrapper>
        <Grid>
          <Line />
          <Row>
            <Col xs={12} lg={4}>
              <LinkTo to="/"><Text>Главная</Text></LinkTo>
              <LinkTo to="/blog"><Text>Блог</Text></LinkTo>
            </Col>
            <Col xs={12} lg={4}>
              <Text>Телефон:</Text>
              <Contact>8-(904)-069-49-47</Contact>
            </Col>
            <Col xs={12} lg={4}>
              <Text>Адрес:</Text>
              <Contact>проспект Бусыгина, д.9</Contact>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12} lg={8}>
              <TextWrapper>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </TextWrapper>
            </Col>
          </Row>  
        </Grid>
      </Wrapper>
    );
  }
}

export default Footer;

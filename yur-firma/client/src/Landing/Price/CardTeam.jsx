import React, { Component } from 'react';
import styled from 'styled-components';
import {Grid, Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`
  padding-top: 50px;
`

const Card = styled.div`
  background-color: #858585;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 14px 14px 0 0;

  &:hover,
  &:active,
  &:focus {
    transition: .3s ease-in;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, .3);
  }
`

const Text = styled.p`
  font-family: 'Fira Sans';
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;

  :last-child {
    font-size: 15px;
    font-weight: normal;
  }
`

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  padding-top: 37px;
`

const TextWrapper = styled.div`
  background-color: #F8F8F8;
  padding-bottom: 20px;
`

class CardTeam extends Component {
  render() {
    return(  
      <Wrapper>
          <Row center="xs">
          {this.props.items.map((item) =>
            <Col key={item.id} xs={12} md={6} lg={3}>  
            <Card>
              <Img src={item.img} />
              <TextWrapper>
                <Grid>
                  <Text>{item.name}</Text>
                  <Text>{item.text}</Text>
                </Grid>
              </TextWrapper>
            </Card>
            </Col>
            )}
          </Row>  
      </Wrapper>
    );
  }
}

export default CardTeam;

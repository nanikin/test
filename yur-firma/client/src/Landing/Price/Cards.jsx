import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Card = styled.div``

const Wrapper = styled.div`
  background-color: #929292;
  border-radius: 14px 14px 0px 0px;
  font-family: 'Fira Sans';
  max-height: 190px;

  &:hover,
  &:active,
  &:focus {
    transition: .3s ease-in;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .3);
  }
`
const Text = styled.h4`
  color: #FFFFFF;
  text-align: center;
  padding-top: 25px;
  font-size: 15px;

  :last-child {
      padding-bottom: 56px;
      font-size: 20px;
  }

`
const Line = styled.hr``

class Cards extends Component {
  render() {
    console.log("Cards items:", this.props.items)
    return(
      <Card>
        <Row>
          {this.props.items.map((name) =>
          <Col key={name.id} xl={3} md={3} xs={6}>
            <Wrapper>
              <Grid>
                <Text>{ name.head }</Text>
                <Line />
                <Text>{ name.price }</Text>
              </Grid>
            </Wrapper>
          </Col>
          )}
        </Row>
      </Card>
    );
  }
}

export default Cards;

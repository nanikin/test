import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`
  padding-top: 40px;
`

const Card = styled.div`
  padding-bottom: 100px;
`
const Text = styled.p`
  font-family: 'Fira Sans',
  font-size: 18px;
  text-align: center;

  :first-child {
      font-weight: bold;
  }
  `
const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

class CardGuarantees extends Component {
  render(){
    return(
      <Wrapper>
      <Grid>
        <Row>
          {this.props.items.map((item) =>
          <Col key={item.id} xl={4} xs={12} md={4}>
            <Card>
              <Text>{item.name}</Text>
              <Img src={item.userpic} />
              <Text>{item.text}</Text>
            </Card>
          </Col>
          )}
        </Row>
      </Grid>
      </Wrapper>
    );
  }
}

export default CardGuarantees;

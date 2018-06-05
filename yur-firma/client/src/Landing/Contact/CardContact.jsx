import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`
  padding-bottom: 60px;
`
const Card = styled.div`
  background-color: #F0F0F0;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.03);
  border-radius: 14px;
  
  margin-top: 40px;
`
const Head = styled.p`
  font-family: 'Fira Sans';
  text-align: center;
  font-size: 20px;

  padding-top: 20px;
`

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  padding-bottom: 40px;
  }
`

class CardContact extends Component {
  render(){
    return(
      <Wrapper>
        <Row>
        {this.props.items.map((item) =>
          <Col key={item.id} xl={4} xs={12} md={4}>
            <Card>
              <Head>{item.head}</Head>
              <Text>{item.text}</Text>
            </Card>
          </Col>
        )}
        </Row>
      </Wrapper>
    );
  }
}

export default CardContact;

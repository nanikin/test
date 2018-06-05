import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div``

const Img = styled.img`
`

class CardCertificate extends Component {
  render(){
    return(
      <Wrapper>
        <Row center="xs">
          {this.props.items.map((item) =>
            <Col key={item.id} xs={6} lg={3}>
              <Img />
            </Col>
          )}
        </Row>
      </Wrapper>
    );
  }
}

export default CardCertificate;
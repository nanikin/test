import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const AdImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const AdDescribeText = styled.p`
  text-align: center;

  font-family: 'Fira Sans';
  font-size: 20px;
` 

class AdPoint extends Component {
  render() {
    this.props.items.map((name) =>
    console.log("id:", name.id)
    )
    return(
      <Grid>
        <Row>
          {this.props.items.map((name) =>
            <Col key={name.id} xl={3} xs={12} md={3}>
              <div>
                <AdImg src={name.logo} />
                <AdDescribeText>{name.text}</AdDescribeText>
              </div>
            </Col>
            )}
        </Row>
      </Grid>
    );
  }
}

export default AdPoint;

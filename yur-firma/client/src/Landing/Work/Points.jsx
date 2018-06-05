import React, { Component } from 'react';
import styled from 'styled-components';

const Point = styled.div``

const PointTxt = styled.h2`
  color: #0A8DEC;
  font-family: 'Noto Serif';
  font-size: 56px;
  font-weight: bold;
`
const Text = styled.p``

const Wrapper = styled.div``

class Points extends Component {
  render(){
    console.log("items", this.props.items);
    return (
      <Point>
        {this.props.items.map((name) =>
        <Wrapper key={name.id} >
          <PointTxt>{name.num}</PointTxt>
          <Text>
            {name.text}
          </Text>
        </Wrapper>
        )}
      </Point>
    );
  }
}

export default Points;

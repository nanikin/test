import React, { Component } from 'react';
import styled from 'styled-components';
import AdPoint from './AdPoint';
import { logos } from '../../backend';
import { Grid } from 'react-flexbox-grid';


const AdWrapper = styled.section`
  background-color: #F9F9F9;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Noto Serif';

  margin-top: 100px;
`

const AdHead = styled.h2`
  font-size: 42px;
  text-align: center;
  padding-top: 62px;
`

const AdDescribe = styled.div`
  margin-top: 140px;
`

class Ad extends Component {
  render() {
    return(
    <AdWrapper>
      <Grid>
        <AdHead>Вам нужно обращаться к нам, потому что:</AdHead>
        <AdDescribe>
          <AdPoint items={logos} />
        </AdDescribe>
      </Grid>
    </AdWrapper>
    );
  }
}
export default Ad;

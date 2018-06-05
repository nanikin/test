import React, { Component } from 'react';
import styled from 'styled-components';

import CardTeam from './CardTeam';
import { teamCard } from '../../backend';

const Wrapper = styled.section`
  background-color: #F8F8F8;
`

const Head = styled.h2`
  font-family: "Noto Serif";
  font-size: 42px;
  text-align: center;
`

class Team extends Component {
  render() {
    return(
      <Wrapper>
        <Head>Наша команада</Head>
        <CardTeam items={teamCard} />
      </Wrapper>
    );
  }
}

export default Team;

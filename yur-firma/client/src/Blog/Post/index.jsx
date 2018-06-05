import React, { Component } from 'react';
import styled from 'styled-components';
import Application from '../../Landing/Application';

const Wrapper = styled.div`
`

class Post extends Component {
    render(){
      return(
        <Wrapper>
          <h1>Post will be here</h1>
          <Application />
        </Wrapper>
      );
    }
  }
  
  export default Post;
  
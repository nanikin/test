import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import Article from './Article';

const Wrapper = styled.div`
  margin-top: 100px;
`
const BLOG_API = 'https://sipfirma.wordpress.com/';

class List extends Component {
  constructor(props){
    super(props);
    this.state = { posts: [] };
  }

  componentWillMount(){
    return fetch(BLOG_API + '/wp-json/wp/v2/posts')
    .then((responce) => responce.json())
    .then(posts => {
      this.setState({
        posts: posts
      });
    })
  }

  render(){
    return(
      <Wrapper>
        <Grid>
          <Row center="xs">
            <Col xs={12} lg={6}>
              <Link to="/blog/id"><Article /></Link>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default List;

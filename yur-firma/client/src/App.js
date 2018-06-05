import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Footer from './Footer';
import Landing from './Landing';
import Blog from './Blog';
import Post from './Blog/Post';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/id" component={Post} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

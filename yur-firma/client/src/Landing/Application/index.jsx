import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import axios from 'axios';

import LawOffice from '../../img/law office.svg';

const Wrapper = styled.section`
  background-color: #F8F8F8;
`

const Head = styled.h2`
  font-family: 'Noto Serif';
  font-size: 42px;
  text-align: center;

  padding-top: 50px;
`

const Form = styled.form`
`

const Input = styled.input`
  width: 25%;
  border: none;
  background-color: #F8F8F8;
  font-family: 'Fira Sans';
  font-size: 20px;
  border-bottom: 1px solid #000000;

  display: block;
  margin-left: auto;
  margin-right: auto;

  ::-webkit-input-placeholder {
    text-align: center;
  }
`

const TextArea = styled.textarea`
  font-family: 'Fira Sans';
  font-size: 20px;
  background-color: #F8F8F8;
  border: none;
  border-bottom: 1px solid #000000;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;

  ::-webkit-input-placeholder {
    text-align: center;
  }
`;

const Space = styled.br``

const Button = styled.button`
  background-color: #0A8DEC;
  border-radius: 14px;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  font-family: inherit;

  display: block;
  margin-left: auto;
  margin-right: auto;

  height: 80px;
  width: 295px;

  margin-top: 40px;

`

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  margin-top: 60px;
`

class Application extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event){
    const { name, phone, email, message } = this.state;
    event.preventDefault();
    console.log("Submitted");
// eslint-disable-next-line
    const form = await axios.post('/api/form', {
      name,
      phone,
      email,
      message
    })
  }

  handleChange(key){
    return function (e) {
      let state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);

  }

  render(){
    return(
      <Wrapper> 
        <Grid>
          <Head>Оставить заявку</Head>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              placeholder="Имя"
              value={this.state.name}
              onChange={this.handleChange("name")} 
            />
            <Space />
            <Input
              type="text"
              placeholder="Телефон"
              value={this.state.phone}
              onChange={this.handleChange("phone")} 
            />
            <Space />
            <Input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange("email")} 
            />
            <Space />
            <TextArea
              type="text"
              placeholder="Сообщение"
              value={this.state.message}
              onChange={this.handleChange("message")} 
            />
            <Space />
            <Button>Оставить заявку</Button>
          </Form>
          <Img src={LawOffice} />
        </Grid>
      </Wrapper>
    );
  }
}

export default Application;

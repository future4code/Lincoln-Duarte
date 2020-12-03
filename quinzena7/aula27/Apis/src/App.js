import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component {
  state = {
    listadePokemon: "",
    pokemon: ""
  }

  pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
      .then((response) => {this.setState({listadePokemon: response.data.sprites.front_default})})
      .catch((erro) => {console.log(erro)})
  }

  inputonChange = (event) => {
    this.setState({pokemon: event.target.value})
  }

  butaoonClick = () =>{
    this.pegaPokemon()
  }
  
  render(){

    return<AppContainer>
      <h1>Qual é esse pokemon?</h1>
      <label>Digite o nome:</label>
      <input value={this.state.pokemon} onChange={this.inputonChange}/>
      <button onClick={this.butaoonClick}>Enviar</button>
      <img src={this.state.listadePokemon}/>
    </AppContainer>
  }
}
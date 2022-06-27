import React, { Component } from 'react';
import CriaPlaylist from './Components/CriaPlaylist';
import Tela from './Components/Tela';
import styled from 'styled-components';

const Fundo = styled.div`
  background-color: #221F1F;
  display: flex;
  align-items: center;
  width: 100%;
`
const Conteudo = styled.div`
  width: 100%;
  height: 80vh;
  margin: 50px auto;
  text-align: center;
  background-color: #221F1F;


  `
export default class App extends Component {
  render() {
    return (
      <Fundo>
        <Conteudo>
          <CriaPlaylist />
          <Tela />
        </Conteudo>
      </Fundo>
    )
  }
}
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Match from './Components/Match';
import Perfil from './Components/Perfil';


export default function App() {

  const [trocarDeTela, setTrocarDeTela] = useState(true)
  const [matches, setMatches] = useState(true)

  const trocaTela = function () {

    setTrocarDeTela(!trocarDeTela)

  }
  const clearApp = () => {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriela-tobias-alves/clear`)
      .then(() => {
        alert('Seu perfil foi resetado!')

        setMatches(!matches)
      })
      .catch((err) => {
        alert(`Erro: ${err.message}`)
      })
  }

  let telas

  switch (trocarDeTela) {
    case true:
      return telas = 
        <React.Fragment>
          <Header trocarDeTela={trocaTela} nameButton={trocarDeTela} />
          <Perfil resetPerfil={clearApp} matches={matches} />
        </React.Fragment>
   
    case false:
      return telas = 
        <React.Fragment>
          <Header trocarDeTela={trocaTela} />
          <Match resetPerfil={clearApp} matches={matches} />
        </React.Fragment>
    

    default:
  }

  return (
    <>
      {telas}
    </>
  );
}

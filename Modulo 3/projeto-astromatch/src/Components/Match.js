import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'



export const ContainerPage = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`
export const ContainerMatches = styled.div `
    border: 1px solid black;
    width: 400px;
    height: 600px;
    border-radius: 7px;

`
export const HeaderApp = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 50px;
    border-bottom: 1px solid silver;
    padding: 0px 5px;
`


export default function Match(props) {

  const [perfil, setPerfil] = useState([])

  useEffect(() => {
    getMatches('gabriela')
  }, [props.controlador])

  const getMatches = function (aluno) {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
      .then((res) => {
        setPerfil(res.data.matches)
      }).catch((err) => {
        alert(`Erro: ${err.message}`)
      })

  }

  return (
    <ContainerPage>
      <ContainerMatches>
      {perfil.map((match, index) => {
        return <React.fragment key={index}>
          <img src={match.photo} alt={match.photo_alt} />
          <p><strong>{match.name}</strong></p>
          
        </React.fragment>
      })}
      <br />
      <p>Excluir todos os perfis.</p>
      <botton onClick={() => props.clearPerfil('gabriela')}>Limpar Matchs</botton>
      </ContainerMatches>
      </ContainerPage>
  )
}


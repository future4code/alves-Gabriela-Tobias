import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ProfileCardContainer = styled.div`
  margin: 20px;
  border: 1px solid black;
  display: grid;
  justify-content: center;
`;

const ProfilePhoto = styled.img`
  display: flex;
  justify-content:center;
  max-height: 350px;
`;

const ProfileInfo = styled.div`
  padding: 0 16px;
`;

// const Botao = styled.button`
// display: flex;
// justify-content: center;
// `
 

export default function Perfil(props) {

  const [perfil, setPerfil] = useState({})
  const [atualizaPerfil, setAtualizaPerfil] = useState(true)
  const [perfilID, setPerfilID] = useState('')

  useEffect(() => {
    getProfileToChoose('gabriela')
  }, [atualizaPerfil, props.matches])


  const getProfileToChoose = function (aluno) {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
      .then((res) => {
        setPerfil(res.data.profile)
        setPerfilID(res.data.profile.id)
      })
      .catch(err => {
        alert(`Erro: ${err.message}`)
      })
  }

  const choosePerson = function (aluno, choice) {

    const body = {
      'id': perfilID,
      'choice': choice
    }

    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
      .then((res) => {
        if (choice) {

          if (res.data.isMatch) {
            alert('Deu Match!')
            setAtualizaPerfil(!atualizaPerfil)
          } else {
            alert('Esta pessoa não deu match em você!')
            setAtualizaPerfil(!atualizaPerfil)
          }

        } else {
          alert('Você pulou essa pessoa')
          setAtualizaPerfil(!atualizaPerfil)
        }
      }).catch((erro) => {
        alert(`Foi encontrado o seguinte erro: ${erro.message}`)
      })
  }

  const escolhaPerfil = perfil ? (
  <>
    <ProfileCardContainer>
    
    <ProfilePhoto src={perfil.photo} alt={perfil.photo_alt} />
    <ProfileInfo>
    <p><strong>{perfil.name}</strong>, {perfil.age} anos de idade</p>
    <p><strong>Sobre mim:</strong> {perfil.bio}</p>
      <Botao onClick={() => choosePerson('gabriela', true)}>Sim
    </Botao>
    <br/>
      <Botao onClick={() => choosePerson('gabriela', false)}>Não
      </Botao>
        </ProfileInfo>
    </ProfileCardContainer>
  </>) : (
    <React.Fragment>
      <br />
      <p>Lista cheia</p>
      <button onClick={() => props.clearPerfil('gabriela')}>Resetar Perfil</button>
    </React.Fragment>
  )

  return (
    <div>
      {escolhaPerfil}
    </div>
  )
}

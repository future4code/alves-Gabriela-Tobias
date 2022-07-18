import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Botao, Container, Area, BotaoEstilo, Formulario } from './LoginStyle'
import axios from 'axios'
import { BASE_URL } from '../../Components/baseUrl'
import useForm from '../../Hooks/useForm'
import { goToAdminArea, goTripDetails } from '../../Router/coordinator'

function LoginPage() {

  const navigate = useNavigate()
  const { form, getData, cleanData } = useForm({
    email: '',
    password: ''
  })

  const onSubmitLogin = (event) => {
    event.preventDefault();
    cleanData();
  }

  const login = () => {

    const body = {
      email: form.email,
      password: form.password
    }

    axios.post(`${BASE_URL}login`, body)
      .then((response) => {
        alert("Logado")
        localStorage.setItem('token', response.data.token)
        goToAdminArea(navigate)
      }).catch((error) => {
        alert('Dados incorretos')
      })
  }

  return (
    <div>
       <Container>
        <Formulario onSubmit={onSubmitLogin}>
        <input name='email' onChange={getData} placeholder='Email' />
        <input  name='password' type="password" onChange={getData} placeholder='Senha' />
        <Botao>
        <BotaoEstilo onClick={() => login(goTripDetails)}>Login</BotaoEstilo>
        <BotaoEstilo onClick={() => navigate("/")}> Voltar </BotaoEstilo>
      </Botao>
      </Formulario>
    </Container>
      </div>
  )
}

export default LoginPage;
import React from 'react';
import{ useNavigate } from 'react-router-dom';
import{ Botao, Container } from '../HomePage/HomeStyle'

 
const Home = () => {  
  const navigate = useNavigate();
  

  const goTripDetails = () => { 
    navigate('listTrip');
  }

  const goToLogin = () => {
    navigate('login');
  }

  return (
    <Container>
      <Botao onClick={goTripDetails}>Viagens</Botao>
      <Botao onClick={goToLogin}>Login</Botao>
    </Container>
  )
}
export default Home;
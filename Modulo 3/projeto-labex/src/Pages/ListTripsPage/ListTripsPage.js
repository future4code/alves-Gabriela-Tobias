import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Botao, Container, BotaoEstilo, Area, Area2 } from './TripsStyle'

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, [navigate]);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
        console.log(res.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container>
      <h1>Lista de Viagens</h1>
      <Botao>
        <BotaoEstilo onClick={() => navigate('/')}>Voltar</BotaoEstilo>
        <BotaoEstilo onClick={() => navigate('application')}>Escolha sua viagem!</BotaoEstilo>
      </Botao>
      {trips.map((trip) => {
        return(

        <Area>
          <Area2>
            <p>Planeta : {trip.planet}</p>
            <p>Nome : {trip.name}</p>
            <p>Descrição : {trip.description}</p>
            <p>Duração  : {trip.durationInDays} dias</p>
            <p>Data : {trip.date}</p>
            </Area2>
        </Area>
        );
      })}
    </Container>

  );
 }
export default ListTripsPage;


    
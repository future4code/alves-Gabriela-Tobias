import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Botao, Container, Area, BotaoEstilo, Formulario } from './AppStyle'

const ApplicationFormPage = () => {

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [applicationText, setApplicationText] = useState();
  const [age, setAge] = useState();
  const [tripsApp, setTripsApp] = useState([]);
  const [profession, setProfession] = useState();
  const [country, setCountry] = useState();
  

  useEffect(() => {
    getTripsApp();
  }, []);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeApplicationText = (event) => {
    setApplicationText(event.target.value);
  };

  const onChangeProfession = (event) => {
    setProfession(event.target.value);
  };

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const getTripsApp = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriela-tobias-alves/trips"
      )
      .then((res) => {
        setTripsApp(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitApplicationForm = (event, id) => {
    event.preventDefault();

    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriela-tobias-alves/trips/${id} /apply`,
        body
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div>
        <Formulario onSubmit={onSubmitApplicationForm}>
          <div>
            <select>
              <option value="">Selecione a viagem.</option>
              {tripsApp && tripsApp.map((trip) => (
                  <option key={trip.id} value={tripsApp}>
                    {trip.name}
                  </option>
                ))}
            </select>
            <label>Viagem</label>
          </div>
          <div>
            <input type="text" placeholder="Nome"/>
          </div>
          <div>
            <input type="number"placeholder="Idade"/>
          </div>
          <div>
            <input type="text"placeholder="Texto para se candidatar"/>
          </div>
          <div>
            <input type="text"placeholder="Profissão"/>
          </div>
          <div>
            <input type="number" placeholder="Duração em dias" />
          </div>
          <Botao>
            <BotaoEstilo>CRIAR</BotaoEstilo>
            <BotaoEstilo onClick={() => navigate('/')}> VOLTAR </BotaoEstilo>
          </Botao>
        </Formulario>
      </div>
    </Container>
  );
};

export default ApplicationFormPage;

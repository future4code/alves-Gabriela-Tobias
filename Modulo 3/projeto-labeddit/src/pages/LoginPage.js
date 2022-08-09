import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { goToSignUpPage, goToFeedPage } from "../routes/Coordinator";
import { BASE_URL } from "../constants/url";
import logo from "../image/logo.png";
import styled from "styled-components";

 const Img = styled.img`
  display: flex;
  margin: auto;
  @media screen and (max-device-width: 480px) {
  }
`;
 const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8%;
  @media screen and (max-device-width: 480px) {
    margin-top: 25%;
  }
`;
 const H2 = styled.p`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  margin-top: 5px;
  @media screen and (max-device-width: 480px) {
  }
`;
 const P = styled.p`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  @media screen and (max-device-width: 480px) {
  }
`;
 const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-device-width: 480px) {
  }
`;
 const InputEmail = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  padding-left: 12px;
  &:hover {
    border: 2px solid #ff6489;
  }
  &:focus {
    border-color: #f9b24e;
    outline: none;
  }
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
 const InputSenha = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  margin-top: 8px;
  padding-left: 12px;
  &:hover {
    border: 2px solid #ff6489;
  }
  &:focus {
    border-color: #f9b24e;
    outline: none;
  }
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
 const ButtonLogin = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  color: white;
  text-align: center;
  width: 30%;
  height: 50px;
  border: none;
  margin-top: 30px;
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
    width: 81%;
  }
`;
 const ButtonSignUp = styled.button`
  border: 1px solid #fe7e02;
  border-radius: 27px;
  text-align: center;
  width: 30%;
  height: 50px;
  color: #fe7e02;
  margin-top: 12px;
  background-color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
    width: 81%;
  }
`;
 const Hr = styled.hr`
  width: 30%;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 2px;
  border: none;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
 const LoginPage = () => {
  const changePage = useNavigate();

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const loginFunction = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        console.log(res.data);
        goToFeedPage(changePage);
        cleanFields();
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert('Usuário não encontrado! Crie uma conta nova')
      });
  };

  return (
    <div>
      <Header>
        <Img src={logo} alt="" />
        <H2>LabEddit</H2>
        <P>O projeto de rede Social da Labenu</P>
      </Header>

      <Form onSubmit={loginFunction}>
        <InputEmail
          type="email"
          name="email"
          onChange={onChange}
          placeholder="email"
          required
          value={form.email}
        />
        <InputSenha
          type="password"
          name="password"
          onChange={onChange}
          placeholder="senha"
          required
          value={form.password}
          pattern="^.{8,}$"
          title={"escreva no mínimo 8 caracteres"}
        />
        <ButtonLogin>Continuar</ButtonLogin>
        <Hr />
        <ButtonSignUp onClick={() => goToSignUpPage(changePage)}>
          Crie uma conta!
        </ButtonSignUp>
      </Form>
    </div>
  );
}

export default LoginPage;
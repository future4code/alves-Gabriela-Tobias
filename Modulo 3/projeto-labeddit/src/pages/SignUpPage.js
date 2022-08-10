import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "../routes/Coordinator";
import useForm from "../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import logo from "../image/logo.png";
import styled from "styled-components";

 const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  @media screen and (max-device-width: 480px) {
  }
`;
 const Header = styled.div`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-device-width: 480px) {
  }
`;
 const Img = styled.img`
  display: flex;
  margin: auto;
  width: 28.02px;
  height: 28.64px;
  @media screen and (max-device-width: 480px) {
  }
`;
 const ButtonLogin = styled.button`
  color: #4088cb;
  width: 55px;
  height: 25px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
  }
`;
 const P = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 43px;
  color: #373737;
  text-align: center;
  margin-top: 15px;
  @media screen and (max-device-width: 480px) {
  }
`;
 const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  @media screen and (max-device-width: 480px) {
  }
`;
 const InputNome = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  padding-left: 12px;
  margin-bottom: 12px;
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
 const InputEmail = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 30%;
  height: 60px;
  padding-left: 12px;
  margin-bottom: 12px;
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
 const ButtonSignUp = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  color: white;
  text-align: center;
  width: 31%;
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
 const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  
  color: #000000;
  margin-top: 50px;
  span {
    color: #4088cb;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-device-width: 480px) {
  }
`;
 const Div = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-right: 2%;
  color: #000000;
  margin-top: 30px;
  max-width: 95%;
  @media screen and (max-device-width: 480px) {
  }
`;
 const SignUpPage = () => {
  const changePage = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const signUp = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        console.log(res.data);
        goToFeedPage(changePage);
        window.localStorage.setItem("token", res.data.token);
        cleanFields();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Container>
      <Header>
        <Img src={logo} alt="" />
        <ButtonLogin onClick={() => goToLoginPage(changePage)}>
          Entrar
        </ButtonLogin>
      </Header>
      <div>
        <P>Para começar, crie uma conta!</P>
        <Form onSubmit={signUp}>
          <InputNome
            type="text"
            onChange={onChange}
            placeholder="Nome de usuário"
            value={form.username}
            required
            name="username"
          />
          <InputEmail
            type="email"
            onChange={onChange}
            placeholder="E-mail"
            value={form.email}
            required
            name="email"
          />
          <InputSenha
            type="password"
            onChange={onChange}
            placeholder="Senha"
            value={form.password}
            required
            name="password"
            pattern="^.{8,}$"
            title={"escreva no mínimo 8 caracteres"}
          />
          <Text>
            Ao continuar, você concorda com o nosso{" "}
            <span>Contrato de usuário</span> e nossa{" "}
            <span>Política de Privacidade</span>
          </Text>
          <Div>
            <input type="checkbox" required /> Eu concordo em receber emails
            sobre coisas legais no Labeddit
          </Div>
          <ButtonSignUp>Cadastrar</ButtonSignUp>
        </Form>
      </div>
    </Container>
  );
};

export default SignUpPage;
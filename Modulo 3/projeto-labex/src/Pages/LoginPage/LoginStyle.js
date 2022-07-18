import styled from 'styled-components'; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 15px;
  }
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: 15px;
    width: 500px;
    padding: 5px;
  }
`;

export const Botao = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 20px;
`;

export const BotaoEstilo = styled.button`
   display: flex;
    justify-content: space-evenly;
    width: 15vw;
    height: 4vh;
    align-items: center;
    margin-bottom: 50px;
    border-radius: 10px 20px 30px;`

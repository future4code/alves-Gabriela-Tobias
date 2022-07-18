import styled from 'styled-components'; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  flex-wrap: wrap;
`

export const Area = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 10px;
  }
   `

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

    export const Area2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0px 2px 10px gray;
  margin-bottom: 20px;
  width: 100%;
  p {
    margin-bottom: 5px;
  }
`;

import React from "react";
import styled from "styled-components";

// CSS
const Tela = styled.div`
  display: flex;
  border: solid black;
  width: 50vw;
  height: 80vh;
  font-size: 2rem;
`;
const TelaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 2rem, 0;
  align-items: center;
`;

export default class CaixaUsuario extends React.Component {
    state = {
        valueUser: "",
        valueMsg: "",
        arrayMsg: [],
    };
    onChangeUser = (event) => {
        this.setState({valueUser: event.target.value});
    };
    onChangeMsg = (event) => {
        this.setState({valueMsg: event.target.value});
    };
    onClickEnviar = () => {
        this.setState({ valueMsg: "" });
        this.setState({ valueUser: "" });
        this.setState({ arrayMsg: [...this.state.arrayMsg, <li>{this.state.valueUser }: {this.state.valueMsg}</li> ] })
    };
        render() { 

            return (
                <div>
                    <TelaContainer />
                   <Tela>
                    <ul>{[this.state.arrayMsg]}</ul>
                    </Tela>
                    <input
                        value={this.state.valueUser}
                        onChange={this.onChangeUser}
                        placeholder="Nome de usuário"
                    />
                    <input
                        value={this.state.valueMsg}
                        onChange={this.onChangeMsg}
                        placeholder="Mensagem"
                    />
                    <button onClick={this.onClickEnviar}>Enviar!</button>
                </div>
            )
         } }
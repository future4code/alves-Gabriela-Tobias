import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {
    state = {
        nameUser: '',
        emailUser: '',
    } 

    addUser = () => {
        const body = {
          "name": this.state.nameUser,
          "email": this.state.emailUser
        }
        const addUser = axios.post(
          'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
          body,
          {
            headers: {
              Authorization: "gabriela-tobias-alves"
            }
          }
        );
        addUser
        .then((resposta) => {
            this.setState({nameUser : "" , emailUser : ""})
            alert("Usuário Cadastrado")
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      }
      setNameUser = (e) => {
        this.setState({ nameUser: e.target.value })
      }
      setMailUser = (e) => {
        this.setState({ emailUser: e.target.value})
      }
    render(){
        return(
        <div>
          <label> Nome do Usuário</label>
          <input value={this.state.nameUser} onChange={this.setNameUser} placeholder='Usuário' />
          <label> Email do Usuário</label>
          <input value={this.state.emailUser} onChange={this.setMailUser} placeholder='Seu email' />
          <button onClick={this.addUser}>Enviar</button>
        </div>
        )
    }
} 
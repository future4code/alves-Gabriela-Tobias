import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    nameUser: '',
    emailUser: '',
    logado: false,
    usuarios: [],
  }

  setNameUser = (e) => {
    this.setState({ nameUser: e.target.value })
  }
  setMailUser = (e) => {
    this.setState({ emailUser: e.target.value })
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
        console.log(resposta)
        alert("Usuário Cadastrado")
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  }
  showUsers = () => {
      axios.get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',

      {
        headers: {
          Authorization: "gabriela-tobias-alves"
        }
      })
      .then((resposta) => {
      console.log(resposta.data)
      this.setState({ usuarios : resposta.data })
    })
  }
  showUserTela = () => {
    this.setState({ logado: !this.state.logado })
    this.showUsers()
  }
  removeUser = (id) => { 
  axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "gabriela-tobias-alves"
        }
      })
  .then((resposta) => {
   alert('Usuário foi removido')
    this.showUsers()

  })
  .catch((erro) => {
    alert(erro.response.data.message)
  })

  }
  render() {
    let userInterface
    if (this.state.logado === false) {
      userInterface =
        <div>
          <label> Nome de Usuário</label>
          <input value={this.state.nameUser} onChange={this.setNameUser} placeholder='Usuário' />
          <label> E-mail do Usuário</label>
          <input value={this.state.emailUser} onChange={this.setMailUser} placeholder='Seu email' />
          <button onClick={this.addUser}>Enviar</button>
        </div>
    } else {
      userInterface =
        <ul>
          <h2>Usuários:</h2>
          {this.state.usuarios.map((users) => {return <li> {users.name}
      <button onClick={()=>this.removeUser(users.id)}>Remover usuário</button>
      </li>})}
        </ul>
    }

    return (
      <div>
        <button onClick={this.showUserTela}>Trocar de Tela</button>
        {userInterface}
      </div>
    );
  }
}

export default App; 
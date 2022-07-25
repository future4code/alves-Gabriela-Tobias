import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Click = styled.button`
    margin: 15px;
    width: 150px;
    height: 50px;
    border-radius: 25px;
    background-color: #CC4700;
    border-color: #CC4700;
    color: white;
    :hover{
        background-color: white;
        color: #CC4700;
  }
`
const Container = styled.div`
    text-align: center;
    color:white;
`
const CampoInput = styled.input`
    border-radius: 30px;
    text-align: center;
    height: 30px;
    font-size: 15px;
    
`


export default class CriaPlaylist extends Component {
    state = {
        name: ''
    }

    createPlaylist = () => {

        let body = {
            name: this.state.name
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {
            headers: {
                'Authorization': 'gabriela-tobias-alves'
            }
        }).then((response) => {
            console.log(response.data)
            this.setState({name: ''})
        }).catch((err) => {
            console.log(err.response)
        })
    }

    campoDados = (event) => {
        this.setState({ name: event.target.value })
    }
    render() {
        return (
            <Container>
                <h1>LabeFy</h1>
                <h3>Digite o nome da sua Playlist</h3>
                <CampoInput value={this.state.name} onChange={this.campoDados} placeholder='Nome'></CampoInput>
                <Click onClick={() => this.createPlaylist()}>Confirme</Click>
            </Container>
        )
    }
}
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
    background-color:#221F1F ;
    
`

const Links = styled.a`
    text-decoration: none;
`


const CampoTexto = styled.input`
    border-radius: 10px;
    text-align: center;
    height: 25px;
    font-size: 20px;
    margin-right: 10px;
`
const LeituraTexto = styled.label`
    font-size: 20px;
    color:white;
    border-radius: 30px;
    text-align: center;
    height: 30px;
    font-size: 15px;
`


export default class Tela extends Component {
    state = {
        playlist: [],
        musicas: [],
        telas: 1,
        nome: '',
        artista: '',
        url: '',
        idPlaylist: '',
        title: ''
    }

    componentDidUpdate() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
            headers: {
                'Authorization': 'gabriela-tobias-alves'
            }
        }).then(response => {
            this.setState({ playlist: response.data.result.list })
        }).catch(error => {
            console.log(error.response)
        })
    }

    deletePlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                'Authorization': 'gabriela-tobias-alves'
            }
        }).then(response => {
            let novasMusicas = this.state.playlist.filter((musicas) => {
                return id !== musicas.id
            })

            this.setState({ playlist: novasMusicas, })
        }).catch(error => {
            console.log(error.response)
        })
    }

    getPlaylistTracks = (id, title) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                'Authorization': 'gabriela-tobias-alves'
            }
        }).then(response => {
            this.setState({ musicas: response.data.result.tracks, telas: 2, idPlaylist: id, title: title})
        }).catch(error => {
            console.log(error.response)
        })
    }

    addTrackToPlaylist = (id) => {

        let body = {
            'name': this.state.nome,
            'artist': this.state.artista,
            'url': this.state.url
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
                'Authorization': 'gabriela-tobias-alves'
            }
        }).then(() => {
            this.setState({ nome: '', artista: '', url: '' })
        }).catch(error => {
            console.log(error.response)
        })
    }

    removeTrackFromPlaylist = (id) => {
        let idPlaylist = this.state.idPlaylist
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${id}`, {
            headers: {
                'Authorization': 'gabriela-tobias-alves'
            }
        }).then(() => {
            let novaLista = this.state.musicas.filter((musica) => {
                return id !== musica
            })

            this.setState({ musicas: novaLista })
        }).catch(error => {
            console.log(error.response)
        })
    }

    telaAdicionarMusicas = () => {
        this.setState({ telas: 3 })
    }

    telaLista = () => {
        this.setState({ telas: 1 })
    }

    campoNome = (event) => {
        this.setState({ nome: event.target.value })
    }
    campoArtista = (event) => {
        this.setState({ artista: event.target.value })
    }
    campoURL = (event) => {
        this.setState({ url: event.target.value })
    }
    render() {

        const listaMusicas = this.state.playlist.map((playlist) => {
            return <div key={playlist.id}>
                <h3>{playlist.name}</h3>
                <Click onClick={() => { this.deletePlaylist(playlist.id) }}>Deletar</Click>
                <Click onClick={() => { this.getPlaylistTracks(playlist.id, playlist.name) }}>Info</Click>
            </div>
        })

        const musica = this.state.musicas.map((musicas) => {
            return <div key={musicas.id}>
                <h3>{this.state.title}</h3>
                <p>Musica: {musicas.name}</p>
                <p> Artista: {musicas.artist}</p>
                <Links href={musicas.url} target="_blank"><Click>Play</Click></Links>
                <Click onClick={() => { this.removeTrackFromPlaylist(musicas.id) }}>Deletar</Click>
            </div>
        })

        let titulo = this.state.title
        let labeFy
        if (this.state.telas === 1) {
            labeFy = <LeituraTexto>
                <Click onClick={() => this.getAllPlaylists()}>Buscar</Click>
                {listaMusicas}
            </LeituraTexto>
        } else if (this.state.telas === 2) {
            labeFy = <LeituraTexto>
                {musica}
                <Click onClick={() => this.telaLista()}>Voltar</Click>
                <Click onClick={() => this.telaAdicionarMusicas()}>Adicione uma musica</Click>
            </LeituraTexto>
        } else {
            labeFy = <div>
                <h3>{titulo}</h3>
                <p>Adicionar musica na playlist {titulo}</p>
                <LeituraTexto>Nome: </LeituraTexto>
                <CampoTexto value={this.state.nome} onChange={this.campoNome} placeholder='Nome' />
                <LeituraTexto>Artista: </LeituraTexto>
                <CampoTexto value={this.state.artista} onChange={this.campoArtista} placeholder='Artista' />
                <LeituraTexto>URL: </LeituraTexto>
                <CampoTexto value={this.state.url} onChange={this.campoURL} placeholder='URL' />
                <Click onClick={() => { this.addTrackToPlaylist(this.state.idPlaylist) }}>Adicionar musica</Click>
                <Click onClick={() => this.telaLista()}>Voltar</Click>
            </div>
        }

        return (
            <Container>
                {labeFy}
            </Container>
        )
    }
}
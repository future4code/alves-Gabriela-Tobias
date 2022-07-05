import React, { useState } from "react";
import styled from "styled-components";


const PostContainer = styled.div`
  border: 2px solid gray;
  width: 400px;
  margin-bottom: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 10px;
`;
const PostFooter = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const FotoUsuario = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 70%;
`;
const ImgPost = styled.img`
  width: 100%;
`

const CommentContainer = styled.div`
  margin-left: 10px;
`;


function Post(props) {

  const [curtida, setCurtida] = useState(false)

  const [numeroCurtidas, setNumeroCurtidas] = useState(0)

  const [comentado, setComentado] = useState(false)

  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const [comentarios, setComentarios] = useState([])

  const [inputValue, setInputValue] = useState('')

  const onClickCurtida = () => {
    if (curtida) {
      setCurtida(!curtida)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtida(!curtida)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
   setComentado(!comentado)
  };

  const onChangeComentario = (event) => {
    setInputValue(event.target.value)
  };

  const enviarComentario = (comentario) => {
    setComentarios([...comentarios, comentario])
    setComentado(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputValue('')
  };

  const caixaDeComentario = comentado ? (
    <React.Fragment>
      <label htmlFor={"comentario"} >Comente: </label>
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      <button onClick={()=> enviarComentario(inputValue)}>Enviar</button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      {comentarios.map((comentario, index) => {
        return <div key={index}>
            <p>{comentario}</p>
          </div>
      })}
    </React.Fragment>
  );
  return (
    <PostContainer>
      <PostHeader>
        <figure>
          <FotoUsuario img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </PostHeader>
      <hr />
      <main>
        <figure>
          <ImgPost img src={props.fotoPost} alt={'Imagem do post'} />
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
        </figure>
      </main>
      <hr />
      
        <section>
          <span> {numeroCurtidas}</span>
          <button onClick={onClickCurtida}>
            {curtida ? "Dislike" : "Like"}
          </button >
        </section>
        <PostFooter>
          <span>comentários: {numeroComentarios}</span>
          <button onClick={onClickComentario}>
            {comentado ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        
      </PostFooter>
    </PostContainer>
  );
};

export default Post;
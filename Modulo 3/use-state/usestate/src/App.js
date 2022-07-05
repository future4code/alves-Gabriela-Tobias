import React from 'react';
import Post from './components/Post';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`;
  const App = () => {
    return(
      <Container>
      <h1>Post</h1>
      <Post
        nomeUsuario = {'Usuário'}
        fotoUsuario = {'https://picsum.photos/50/50'}
        fotoPost = {'https://picsum.photos/200/150'}
      />
      </Container>
  );
};

export default App;

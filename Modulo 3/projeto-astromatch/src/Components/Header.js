import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react'; 

const Headerstyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-bottom: 1px solid;
`
const Botao = styled.div`
  display: flex;
  justify-content: space-around;
`
export default function Header(props) {

    const [nameButton, setNameButton] = useState(true)

    useEffect(() => {
      setNameButton(props.nameButton1)
    }, [props.nameButton1])

    return (
        <Headerstyle>
            <h2>AstroMatch</h2>
            <Botao onClick={props.trocarDeTela}>{nameButton ? 'Ir para matches' : 'Ir para Perfis'}</Botao>
        </Headerstyle>
    )
}
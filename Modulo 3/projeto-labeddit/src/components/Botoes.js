import React from "react";
import styled from "styled-components";

 const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
 const Div1 = styled.div`
  margin-left: 12px;
  margin-right: 12px;
`;
 const Button = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  width: 90px;
  &:hover {
    cursor: pointer;
  }
`;
const Botoes = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <Div>
      <Button onClick={onLeftClick}>voltar</Button>
      <Div1>{page}</Div1>
      <Button onClick={onRightClick}>próxima</Button>
    </Div>
  );
};
export default Botoes;
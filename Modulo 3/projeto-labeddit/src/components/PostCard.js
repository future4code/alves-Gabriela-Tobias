import React from "react";
import { BASE_URL } from "../constants/url";
import { createVote, changeVote, deleteVote } from "../hooks/useRequestData";
import likeOn from "../image/likeOn.png";
import likeOff from "../image/likeOff.png";
import dislikeOn from "../image/dislikeOn.png";
import dislikeOff from "../image/dislikeOff.png";

import styled from "styled-components";
 const Container = styled.div`
    position: relative;
    width: 40%;
    min-height: 167px;
    display: grid;
    grid-template-rows: 16px 1fr 35px;
    align-items: center;
    justify-content: space-between;
    padding: 9px 10px;
    gap: 18px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    box-sizing: border-box;
    @media screen and (max-device-width : 480px){
        width: 80%;
    }
`
 const Conteudo = styled.div`
    display: flex;
    align-items: center;
`
 const PUsername = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #6f6f6f;
    
`
 const Votes1= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    gap: 15.92px;
    border: 0.796748px solid #ECECEC;
    border-radius: 28px;
    height: 28px;
    
`
 const Img = styled.img`
    
    
`
 const Button = styled.button`
    border: none;
    background-color: transparent;
    &:hover{
        cursor: pointer;
    };
`
 const PVote = styled.p`
        margin-bottom: 4px;
      
        width: 18px;
        height: 12px;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 12px;
        text-align: center;
        color: #6F6F6F;
`
 const Body = styled.p`
    display: flex;
    align-items: center;
        
`


  function PostComments(props) {
  let like = 1;
  let dislike = -1;
  const url = `${BASE_URL}/comments/${props.post.id}/votes`;
  const postVote = (curtida) => {
    createVote(url, curtida, props.getData);
  };
  const cPostVote = (curtida) => {
    changeVote(url, curtida, props.getData);
  };

  const deletingVote = () => {
    deleteVote(url, props.getData);
  };
  return (
    <Container>
      <PUsername>enviado por: {props.post.username}</PUsername>
      <Body>{props.post.body}</Body>
      <Conteudo>
        <Votes1>
          {props.post.userVote === null ? (
            <Button onClick={() => postVote(like)}>
              <Img src={likeOff} alt="" />{" "}
            </Button>
          ) : props.post.userVote === 1 ? (
            <Button onClick={() => deletingVote()}>
              <Img src={likeOn} alt="" />
            </Button>
          ) : (
            <Button onClick={() => cPostVote(like)}>
              <Img src={likeOff} alt="" />
            </Button>
          )}
          {props.post.voteSum === null ? (
            <PVote>0</PVote>
          ) : (
            <PVote>{props.post.voteSum}</PVote>
          )}
          {props.post.userVote === null ? (
            <Button onClick={() => postVote(dislike)}>
              <Img src={dislikeOff} alt="" />
            </Button>
          ) : props.post.userVote === 1 ? (
            <Button onClick={() => cPostVote(dislike)}>
              <Img src={dislikeOff} alt="" />
            </Button>
          ) : (
            <Button onClick={() => deletingVote()}>
              <Img src={dislikeOn} alt="" />
            </Button>
          )}
        </Votes1>
      </Conteudo>
    </Container>
  );
}

export default PostComments;
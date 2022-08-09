import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { goToPostPage } from "../../Route/Coordinator";
import { createVote, changeVote, deleteVote } from "../../Services/requests";
import likeOn from "../image/likeOn.png";
import likeOff from "../image/likeOff.png";
import dislikeOn from "../image/dislikeOn.png";
import dislikeOff from "../image/dislikeOff.png";
import comments from "../image/comments.png";


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
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  word-wrap: inherit;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
const Conteudo = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-device-width: 480px) {
  }
`;
const PUsername = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6f6f6f;
  @media screen and (max-device-width: 480px) {
  }
`;
const ImgComments = styled.img`
  width: 14.93px;
  height: 14px;
  @media screen and (max-device-width: 480px) {
  }
`;
const Comment1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 8px;
  width: 65.33px;
  height: 28px;
  border: 0.793333px solid #ececec;
  border-radius: 28px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
  }
`;
const Votes1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  gap: 15.92px;
  border: 0.796748px solid #ececec;
  border-radius: 28px;
  height: 28px;
  @media screen and (max-device-width: 480px) {
  }
`;
const Img = styled.img``;
const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
  }
`;
const PVote = styled.p`
  margin-bottom: 4px;
  width: 18px;
  height: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  color: #6f6f6f;
  @media screen and (max-device-width: 480px) {
  }
`;
const PComment = styled.p`
  margin-bottom: 4px;
  width: 18px;
  height: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  color: #6f6f6f;
  @media screen and (max-device-width: 480px) {
  }
`;
const Body = styled.p`
  display: flex;
  align-items: center;
  word-break: break-word;
  @media screen and (max-device-width: 480px) {
  }
`;

export default function FeedPosts(props) {
    const changePage = useNavigate();
    let like = 1;
    let dislike = -1;
    const url = `${BASE_URL}/posts/${props.post.id}/votes`;
    const goToPostComments = (id) => {
        goToPostPage(changePage, id);
        props.setBody(props.post);
    };
    const postVote = (curtida) => {
        createVote(
            url,
            curtida,
            props.getData,
        );
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
                <Comment1 onClick={() => goToPostComments(props.post.id)}>
                    <ImgComments src={comments} alt="" />
                    {props.post.commentCount === null ? (
                        <PComment>0</PComment>
                    ) : (
                        <PComment>{props.post.commentCount}</PComment>
                    )}
                </Comment1>
            </Conteudo>
        </Container>
    );
}
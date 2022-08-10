import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { goToFeedPage, goToLoginPage } from "../routes/Coordinator";
import { useRequestData } from "../hooks/useRequestData";
import useForm from "../hooks/useForm";
import { createComment } from "../hooks/useRequestData";
import PostComments from "../components/PostCard";
import sair from "../image/sair.png";
import logo from "../image/logo.png";
import likeOn from "../image/likeOn.png";
import likeOff from "../image/likeOff.png";
import dislikeOn from "../image/dislikeOn.png";
import dislikeOff from "../image/dislikeOff.png";
import comments from "../image/comments.png";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;
const Conteudo1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Button1 = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const Header = styled.div`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Img1 = styled.img`
  display: flex;
  margin: auto;
  width: 28.02px;
  height: 28.64px;
`;
const ButtonLogout = styled.button`
  color: #4088cb;
  width: 55px;
  height: 25px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const InputComentario = styled.textarea`
  background: #ededed;
  border-radius: 12px;
  width: 40%;
  height: 130px;
  border: none;
  padding-left: 12px;
  padding-top: 12px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #6f6f6f;
  &:hover {
    border: 2px solid #ff6489;
  }
  &:focus {
    border-color: #f9b24e;
    outline: none;
  }
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
const ButtonRes = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 12px;
  color: white;
  text-align: center;
  width: 40%;
  height: 50px;
  border: none;
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 480px) {
    width: 81%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
`;
const Hr = styled.hr`
  width: 40%;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 2px;
  border: none;
  margin: auto;
  margin-bottom: 12px;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
const Div = styled.div`
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
  box-sizing: border-box;
  margin: auto;
  margin-top: 20px;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
const Conteudo = styled.div`
  display: flex;
  align-items: center;
`;
const PUsername = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6f6f6f;
`;
const ImgComments = styled.img`
  width: 14.93px;
  height: 14px;
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
`;
const Img = styled.img``;
const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
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
`;
const Body = styled.p`
  display: flex;
  align-items: center;
  word-break: break-word;
`;

const PostDetailsPage = (props) => {
    const changeToFeedPage = useNavigate();


    const id = useParams().id;
    const [comments1, isLoading, error, getData] = useRequestData(
        `${BASE_URL}/posts/${id}/comments`
    );
    const { form, onChange, cleanFields } = useForm({ body: "" });

    const listComments =
        comments1 &&
        comments1.map((post) => {
            return <PostComments key={post.id} post={post} getData={getData} />;
        });

    const postComment = (event) => {
        event.preventDefault();
        const url = `${BASE_URL}/posts/${id}/comments`;
        createComment(url, form, getData, cleanFields);
    };

    return (
        <Container>
            <Header>
                <Button1 onClick={() => goToFeedPage(changeToFeedPage)}>
                    <img src={sair} alt="" />
                </Button1>
                <Img1 src={logo} alt="" />
                <ButtonLogout onClick={() => goToLoginPage(changeToFeedPage)}>
                    Logout
                </ButtonLogout>
            </Header>
            <Div>
                <PUsername>enviado por: {props.body.username}</PUsername>
                <Body>{props.body.body}</Body>
                <Conteudo>
                    <Votes1>
                        {props.body.userVote === null ? (
                            <Button>
                                <Img src={likeOff} alt="" />{" "}
                            </Button>
                        ) : props.body.userVote === 1 ? (
                            <Button>
                                <Img src={likeOn} alt="" />
                            </Button>
                        ) : (
                            <Button>
                                <Img src={likeOff} alt="" />
                            </Button>
                        )}
                        {props.body.voteSum === null ? (
                            <PVote>0</PVote>
                        ) : (
                            <PVote>{props.body.voteSum}</PVote>
                        )}
                        {props.body.userVote === null ? (
                            <Button>
                                <Img src={dislikeOff} alt="" />
                            </Button>
                        ) : props.body.userVote === 1 ? (
                            <Button>
                                <Img src={dislikeOff} alt="" />
                            </Button>
                        ) : (
                            <Button>
                                <Img src={dislikeOn} alt="" />
                            </Button>
                        )}
                    </Votes1>
                    <Comment1>
                        <ImgComments src={comments} alt="" />
                        {props.body.commentCount === null ? (
                            <PComment>0</PComment>
                        ) : (
                            <PComment>{props.body.commentCount}</PComment>
                        )}
                    </Comment1>
                </Conteudo>
            </Div>
            <Form onSubmit={postComment}>
                <InputComentario
                    type="text"
                    onChange={onChange}
                    value={form.body}
                    name="body"
                    placeholder="escreva um comentário..."
                    required
                />
                <ButtonRes>comentar</ButtonRes>
            </Form>
            <Hr />
            <Conteudo1>
                {isLoading && <p>carregando...</p>}
                {!isLoading && listComments}
            </Conteudo1>
        </Container>
    );
};

export default PostDetailsPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostDetailsPage, logout } from "../routes/Coordinator";
import { createPost, useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/url";
import PostCard from "../components/PostCard";
import useForm from "../hooks/useForm";
import logo from "../image/logo.png";
import Botoes from "../components/Botoes";
import styled from "styled-components";



const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  @media screen and (max-device-width: 480px) {
  }
`;
const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media screen and (max-device-width: 480px) {
  }
`;
const Header = styled.div`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-device-width: 480px) {
  }
`;
const Img = styled.img`
  display: flex;
  margin-left: 2%;
  width: 28.02px;
  height: 28.64px;
  @media screen and (max-device-width: 480px) {
  }
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
  @media screen and (max-device-width: 480px) {
  }
`;
const InputTitulo = styled.input`
  background: #ededed;
  border-radius: 12px;
  width: 40%;
  height: 50px;
  border: none;
  padding-left: 12px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  &:hover {
    border: 2px solid #ff6489;
  }
  &:focus {
    border-color: #f9b24e;
    outline: none;
  }
  color: #6f6f6f;
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
const InputPost = styled.textarea`
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
    outline: none;
    border-color: #f9b24e;
  }
  @media screen and (max-device-width: 480px) {
    width: 80%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  gap: 12px;
  @media screen and (max-device-width: 480px) {
  }
`;
const ButtonPost = styled.button`
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
  margin-top: 8px;
  display: flex;
  justify-content: center;
  @media screen and (max-device-width: 480px) {
  }
`;
const InputSearch = styled.input`
   background: #ededed;
   box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #4088cb;
  width: 40%;
  height: 25px;
  
  padding-left: 12px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  outline: none;
  &:hover {
    border-bottom: 2px solid #4088cb
  }
  &:focus {
    border-bottom: 2px solid #4088cb;
    
  }
  color: #6f6f6f;
  
`;


const FeedPage = (props) => {
    
    const changeToLoginPage = useNavigate();
    const { form, onChange, cleanFields } = useForm({ title: "", body: "" });
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState('')
    const itensPerPage = 5;
    const [posts, isLoading, error, getData] = useRequestData(
        `${BASE_URL}/posts/?page=${page * itensPerPage}&size=${itensPerPage}`
    );
    const onLeftClick = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };
    const onRightClick = () => {
        if (page + 1 < 50) {
            setPage(page + 1);
        }
    };
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
    }
    const filteredPost = posts && posts.filter((post) => {
        let search1 = search.toLowerCase();
        let posts = post.body.toLowerCase();
        return (
            posts.includes(search1)
        );
    })
    const listPost =
        filteredPost.map((post) => {
            return (
                <PostCard
                    post={post}
                    key={post.id}
                    getData={getData}
                    body={props.body}
                    setBody={props.setBody}
                />
            );
        });

    const createdPost = (event) => {
        event.preventDefault();
        const url = `${BASE_URL}/posts`;
        createPost(url, form, getData, cleanFields);
    };

    return (
        <Container>
            <Header>
                <Img src={logo} alt="" />
                <InputSearch onChange={onChangeSearch} value={search} type='text' placeholder="Buscar..." />
                <ButtonLogout onClick={() => logout(changeToLoginPage)}>
                    Logout
                </ButtonLogout>
            </Header>
            <div>

                <Form onSubmit={createdPost}>
                    <InputTitulo
                        type="text"
                        onChange={onChange}
                        name="title"
                        placeholder="título do Post *"
                        value={form.title}
                        required
                    />
                    <InputPost
                        type="text"
                        onChange={onChange}
                        name="body"
                        placeholder="Escreva seu Post... *"
                        value={form.body}
                        required
                    />
                    <ButtonPost>Postar</ButtonPost>
                </Form>
                <Hr />
                <Conteudo>
                    {isLoading && <p>carregando...</p>}
                    {!isLoading && listPost}
                </Conteudo>
                <Div>
                    <Botoes
                        page={page + 1}
                        onLeftClick={onLeftClick}
                        onRightClick={onRightClick}
                    />
                </Div>
            </div>
        </Container>
    );
};

export default FeedPage;
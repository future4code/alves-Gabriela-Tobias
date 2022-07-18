import { useState, useEffect } from 'react';
import { BASE_URL } from '../Components/BASE_URL';
import axios from 'axios';

export default function useListaViagem(path){
    const [viagem, setViagem] = useState()

    useEffect(()=>{
        axios.get(`${BASE_URL}${path}`)
        .then((res)=>{
            setViagem(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    },[path])
    return {viagem};
};
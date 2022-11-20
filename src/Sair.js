import React, {useEffect} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
import { httpClient } from './HTTPClient';

export default function ValidarUsuario() {

    const navigate = useNavigate();

    useEffect(() => {

        sair();
    }, []);

    const sair = () => {

        let p = httpClient().get("Login/Sair")
        .then(r => {
            sessionStorage.removeItem("autenticado");
            navigate("/");
        });

    };

    let saida = 
    <>
    </> 

    return saida;
} 
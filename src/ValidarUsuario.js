import React, {useEffect} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';

export default function ValidarUsuario() {

    const navigate = useNavigate();

    useEffect(() => {

        verificar();
    }, []);

    const verificar = () => {

        if (sessionStorage.getItem("autenticado") == null)
        {
            navigate("/");
        }

    };

    let saida = 
    <>
    </> 

    return saida;
} 
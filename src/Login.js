import React, { useState, useEffect } from "react";
import { httpClient } from './HTTPClient';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagemLogo from './imagens/logo.jpg'

export default function Login() {


    const navigate = useNavigate();
    const [stateLogin, setStateLogin] = useState({
        nome: "",
        senha: ""
    });


    const validar = () => {


        let dados = {
            nome: stateLogin.nome,
            senha: stateLogin.senha
        }

        let p = httpClient().post("Login/Validar", dados);
        p.then(r => {
             return r.json()
        })
            .then(r => {

                if (r.sucesso) {
                    sessionStorage.setItem("autenticado", "true");
                    navigate("/PaginaInicial");

                }
                else {

                    alert(r.msg);
                }

            })


    }

   let saida2 = 
   <>
      <section className="vh-100" style={{backgroundColor: "#508bfc"}}>
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100 " style={{zIndex:-1}}>
   
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
      <img  style={{height:"250px", width:"300px", paddingBottom: "0px", top: "60px",letf: "300px", position: "static", zIndex: 1}} src={imagemLogo}/>
        <div className="card shadow-2-strong" style={{borderRadius: "1rm"}}>
           
          <div className="card-body p-5 text-center">

            <div className="form-outline mb-4">
              <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Nome"
                    value={stateLogin.nome}
                    onChange={(event) => { setStateLogin({ ...stateLogin, nome: event.target.value}) }} />
              <label className="form-label" for="typeEmailX-2">Login</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg"  placeholder="Senha"
                    value={stateLogin.senha}
                    onChange={(event) => { setStateLogin({ ...stateLogin, senha: event.target.value}) }}/>
              <label className="form-label" for="typePasswordX-2">Senha</label>
            </div>
           
        
            <button className="btn btn-primary btn-lg btn-block" type="button" onClick={validar}>Validar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     
   </>
  



    let saida =
        <>
            <div>
                <input type="text"
                    placeholder="Nome"
                    value={stateLogin.nome}
                    onChange={(event) => { setStateLogin({ ...stateLogin, nome: event.target.value}) }}
                />

                <input type="password"
                    placeholder="Senha"
                    value={stateLogin.senha}
                    onChange={(event) => { setStateLogin({ ...stateLogin, senha: event.target.value}) }}
                />

                <button type="button" onClick={validar}>Validar</button>
            </div>
        </>

    return (saida2);
}



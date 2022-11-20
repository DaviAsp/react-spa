import React, { useState, useEffect } from "react";
import { httpClient } from './HTTPClient';
import Footer from './Footer';
import Menu from './Menu';
import {Link} from 'react-router-dom';
import imagemLogo2 from './imagens/logo.jpg';
function App() {
  

 
  let saida = 
  <>
    <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="./PaginaInicial" className="logo d-flex align-items-center">
                <img src={imagemLogo2}/>
                <span className="d-none d-lg-block">ClosetModas</span>
            </a>
            </div>
            
                <ul className="nav">
                    <li className="nav-item">
                    <a className="nav-link"><Link to="/TodoList">Adicionar Cliente</Link> </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"><Link to="/TodoList">Alterar Cliente</Link> </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"><Link to="/TodoList">Remover Cliente</Link> </a>
                    </li>
                </ul>
            
    </header>
    <Menu />
  <main id="main" className="main">
 
  <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Buscar por cliente, usando nome ou  CPF"/>
  <div className="input-group-append">
    <button className="btn btn-success" type="button">Procurar</button>
  </div>

  </div>
    </main>
  </>
  
  return (saida);
}

export default App;

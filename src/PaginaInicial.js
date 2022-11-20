import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import imagemLogo2 from './imagens/logo.jpg';
import Menu from './Menu';
import './NiceAdmin/assets/vendor/bootstrap/css/bootstrap.min.css';
import './NiceAdmin/assets/vendor/bootstrap/css/bootstrap.min.css';
import './NiceAdmin/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './NiceAdmin/assets/vendor/boxicons/css/boxicons.min.css';
import './NiceAdmin/assets/vendor/quill/quill.snow.css';
import './NiceAdmin/assets/vendor/quill/quill.bubble.css';
import './NiceAdmin/assets/vendor/remixicon/remixicon.css';
import './NiceAdmin/assets/vendor/simple-datatables/style.css';
import './NiceAdmin/assets/css/style.css';
export default function PaginaInicial() {

  let saida=
   <>
     <header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
  <a href="./PaginaInicial" className="logo d-flex align-items-center">
    <img src={imagemLogo2}/>
    <span className="d-none d-lg-block">ClosetModas</span>
  </a>
</div>

</header>
   <Menu/>
    <main id="main" className="main">  
          <div class="d-flex align-items-center"><img src={imagemLogo2}/></div>              
    </main>
    </>
    return saida;

}
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import imagemLogo2 from './imagens/logo.jpg';
import './NiceAdmin/assets/vendor/bootstrap/css/bootstrap.min.css';
import './NiceAdmin/assets/vendor/bootstrap/css/bootstrap.min.css';
import './NiceAdmin/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './NiceAdmin/assets/vendor/boxicons/css/boxicons.min.css';
import './NiceAdmin/assets/vendor/quill/quill.snow.css';
import './NiceAdmin/assets/vendor/quill/quill.bubble.css';
import './NiceAdmin/assets/vendor/remixicon/remixicon.css';
import './NiceAdmin/assets/vendor/simple-datatables/style.css';
import './NiceAdmin/assets/css/style.css';



export default function Menu() {


    let saida2 = <>  
  <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">


         <li class="nav-item">
                <Link to="/TodoList">Clientes</Link>
         </li>
         <li class="nav-item">
                <Link to="/calc"><span>Calculadora</span></Link> 
         </li>
        </ul>

  </aside>
</>

    return saida2;
} 
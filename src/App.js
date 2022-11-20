import React from 'react';
import Menu from './Menu';
import Footer from './Footer'
import TodoList from './TodoList';
import Calculadora from './Calculadora';
import Login from './Login';
import Sair from './Sair';

import   {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PaginaInicial from './PaginaInicial';
function App() {
  
    let saida = 
    <div>
          <Router>
            
                <Routes>
                    <Route exact path="/" element={<Login />}/>
                    <Route path="/todolist" element={<TodoList />}/>
                    <Route path="/calc" element={<Calculadora />}/>
                    <Route path="/sair" element={<Sair />}/>
                    <Route path="/PaginaInicial" element={<PaginaInicial />}/>
                </Routes>
            
            </Router>
    </div>
 
    return (saida);
}

export default App;

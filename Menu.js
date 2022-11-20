import React, { useState, useEffect } from "react";
import { httpClient } from './HTTPClient';
import Menu from './Menu';
import Footer from './footer'

import   {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  
    let saida = <>
        <nav>
            <Link  to="/calc">Calculadora</Link>

        </nav>
  </>

    return (saida);
}

export default App;
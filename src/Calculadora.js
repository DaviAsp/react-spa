import React, { useState, useEffect } from "react";


function App() {

  const [stateItem, setStateItem] = useState({
    valor:0,
    porcentagem:0,
    pessoas:0,
    mensagem:"",
    gorjeta:"",
    total:"",
    totalCada:""
  });


const calcular = () => {
  

  var valor, porcentagem, pessoas, gorjeta, total, totalCada;
  if(!parseFloat(stateItem.valor))
  {
 
      setStateItem({
        ...stateItem,
        mensagem:"Valor Invalido!!."
      });
  }
  else
  {
          
          if(!parseInt(stateItem.pessoas))
          {
              setStateItem({
                ...stateItem,
                mensagem: "Informe um numero valido de pessoas!!"
              });
          }
          else
          { 
              if(!parseFloat(stateItem.porcentagem))
              {
                  setStateItem({
                    ...stateItem,
                    mensagem: "Informe uma porcentagem valida!!"
                  });
              }
              else
              {
                  valor=parseFloat(stateItem.valor);
                  total=valor;
                  pessoas=parseInt(stateItem.pessoas);
                  porcentagem=parseFloat(stateItem.porcentagem);

                  gorjeta=porcentagem*total/100;
                  total = valor + gorjeta;
                  totalCada =total/pessoas;

                  setStateItem({
                    ...stateItem,
                    mensagem:"",
                    valor:"",
                    porcentagem:"",
                    pessoas:"",
                    gorjeta:gorjeta,
                    total:total,
                    totalCada:totalCada
                  });

              }

          }       
  }
}




      let saida = 
      <>
      <label>Quantidade pessoas na sala</label>
      <input type="number"
         value={stateItem.pessoas}
          onChange={(event) => { setStateItem({...stateItem, pessoas: event.target.value})}}
      />
      <br/>
      <br/>
      <label>Valor da Conta</label>
      <input type="text"
      value={stateItem.valor}
          onChange={(event) => { setStateItem({...stateItem, valor: event.target.value})}}
      />
      <br/>
      <br/>
      <label>Porcentagem </label>
      <input type="number"
      value={stateItem.porcentagem}
          onChange={(event) => { setStateItem({...stateItem, porcentagem: event.target.value})}}
      />
      <button type="button"
          onClick={calcular}>calcular</button>
      <br/>
      <br />
        <p> Gorjeta: { stateItem.gorjeta}    </p><br/>
        <br/>
        <p> Total A pagar: { stateItem.total}    </p><br/>
        <br/>
        <p> total a pagar por pessoa: {stateItem.totalCada}    </p>
        <br/>
        <br/>    
      <br />
      <h1>{stateItem.mensagem}</h1>
    </>

  return (saida);
}

export default App;

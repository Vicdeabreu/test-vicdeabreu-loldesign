import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCartPlus } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <>
    <nav className="navbar">
    <div className="navbar-center">
      <span className="nav-icon">
        <FontAwesomeIcon icon={faBars} />
      </span>
        <img src="./img/loldesign.png" width="8%" alt="Lol Design Fale Mais"/>
        <div className="cart-btn">
          <button onClick="openCart()">
            <span className="nav-icon">
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
          </button>
          <div className="cart-items">0</div>
        </div>
      </div>
    </nav>

    <header className="falehead">
      <div className="banner">
        <h1 className="banner-title">Bem vindo a Fale mais</h1>
          <button className="banner-btn">Calcular planos</button>
      </div>
    </header>

    <section className="product">
      <div className="section-title">
        <h2>Calcule o seu plano Fale Mais</h2>
      </div>

    <form>
      <h1>Verifique o valor</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

        <div className="field-group">
          <div className="field">
            <label htmlFor="origem">DDD de Origem</label>
              <select name="origem" id="origem">
                <option value="0">Selecione um DDD</option>
                <option value="011">011</option>
                <option value="011">016</option>
                <option value="011">017</option>
                <option value="011">018</option>
              </select>
          </div>

          <div className="field">
            <label htmlFor="destino">DDD de Destino</label>
            <select name="destino" id="destino">
              <option value="0">Selecione um DDD</option>
              <option value="011">011</option>
              <option value="011">016</option>
              <option value="011">017</option>
              <option value="011">018</option>
            </select>
          </div>
        </div>

        <div className="field-group">
          <div className="field">
            <label htmlFor="email">Tempo (minutos)</label>
            <input type="number" name="duracao"id="duracao"/>
          </div>

          <div className="field">
            <label htmlFor="email">Planos FaleMais</label>
              <select name="plano" id="plano">
                <option value=" ">Selecione um Plano</option>
                <option value="30">FaleMais 30</option>
                <option value="60">FaleMais 60</option>
                <option value="120">FaleMais 120</option>
              </select>
          </div>
        </div>

          <button type="submit">Calcular!</button>
      </fieldset>

      <fieldset>
        <legend>
          <h2>Resultado</h2>
          <span>Compare os valores e escolha seu plano!</span>
        </legend>


      </fieldset>
    </form>

  </section>

    </>
  );
}

export default App;

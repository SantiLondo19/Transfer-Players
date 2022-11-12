import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from 'react-router-dom';
import './ingresar.css';
import { ConnectContract2 } from './contract/ConnectContract';

export const Ingresar = () => {
  ConnectContract2();
  return (
    <div className="contenedor">
      <div className="contenedor_form">
        <ConnectButton />
        <h1 className="titulo">Professional Transfer</h1>

        <form action="busqueda" className="formulario">

          <div className="genero">
            <h2 className="titulo_genero">Seleccione el genero de su jugador</h2>
            <div className="seleccion_genero">
              <label>Mujer<input type="radio" value="mujer" name="genero" /></label>
              <label>Hombre<input type="radio" value="hombre" name="genero" /></label>
            </div>
          </div>

          <div className="nacionalidada">
            <h2>Seleccione la nacionalidad</h2>
            <div className="contenedor_nacionalidad">
              <select name="nacionalidad" className="selector_nacionalidad">
                <option value="colombiano">Colombiano</option>
                <option value="brazileño">Brazileño</option>
                <option value="argentino">Argentino</option>
                <option value="uruguayo">Uruguayo</option>
                <option value="español">Español</option>
                <option value="estadounidense">Etadounidense</option>
              </select>
            </div>
          </div>

          <div className="estadisticas">
            <h2>Estadistícas</h2>
            <div className="contenedor_estadisticas">
              <select name="estadisticas" className="selector_estadisticas">
                <option value="gol">Goles</option>
                <option value="asistencias">Asistencias</option>
                <option value="tiempoJugado">Tiempo Jugado</option>
                <option value="tarjetasAmarillas">Tarjetas Amarillas</option>
                <option value="tarjetasRojas">Tarjetas Rojas</option>
              </select>
              <label htmlFor="numero" className="numero_estadistica">Número</label>
              <input type="number" name="estadisticas" id="numero" className="estadisticas_numero" min="0" />
            </div>

          </div>

          <div className="posicion">
            <h2>Posicion</h2>
            <div className="contenedor_posicion">
              <select name="posicion" className="selector_posicion">
                <option value="portero">Portero</option>
                <option value="defensa">Defensa</option>
                <option value="central">Central</option>
                <option value="delantero">Delantero</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit">Enviar</button>
        </form>
        <Link to="/busqueda">Buscar Jugador</Link>
      </div>
    </div>
  )
}


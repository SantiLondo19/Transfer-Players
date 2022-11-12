import React from 'react'
import './player.css'
export const Players = () => {
  return (
      <div className="contenedorP">
          <div className="imagen_jugador">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Save_the_Dream_at_the_Match_of_Champions_%2831791511991%29_%28cropped%29.jpg"
                  alt="imagen jugador" />
          </div>
          <div className="estadisticas_jugador">
              <h1 className="nombre_jugador">Lionel Messi</h1>
              <div className="estadisticas">
                  <p>Partidos Jugados: 417 </p>
                  <p>Minutos Jugados: 33511</p>
                  <p>Goles: 383</p>
                  <p>Club: Paris Saint-German</p>
                  <p>Tarjetas Rojas: 3</p>
                  <p>Tarjetas Amarillas: 68</p>
                  <p>Precio: 40723.4 ETH</p>
              </div>
          </div>
          <button>Vender jugador</button>
      </div>
  )
}

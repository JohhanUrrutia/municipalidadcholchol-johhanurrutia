import { useState } from 'react'
import './Menu.css'

function Menu() {
  const [abierto, setAbierto] = useState(false)

  const alternar = () => setAbierto((v) => !v)
  const cerrar = () => setAbierto(false)

  return (
    <header className="menu">
      <div className="barraArriba">
        <div className="contenedorMenu">
          <a href="#inicio" className="marcaMenu" onClick={cerrar}>
            <img
              src="/imgs/icons/logo-navbar.png"
              alt="Municipalidad de Cholchol"
              className="logoMenu"
            />
          </a>

          <button
            type="button"
            className={`botonHamburguesa ${abierto ? 'abierto' : ''}`}
            aria-label="Abrir menú"
            aria-expanded={abierto}
            onClick={alternar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`navegacion ${abierto ? 'abierto' : ''}`}>
            <ul className="linksArriba">
              <li><a href="#inicio" onClick={cerrar}>Inicio</a></li>
              <li><a href="#municipio" onClick={cerrar}>Municipio</a></li>
              <li><a href="#patrimonio" onClick={cerrar}>Patrimonio</a></li>
              <li><a href="#contacto" onClick={cerrar}>Contacto</a></li>
            </ul>

            <ul className="linksAbajoMovil">
              <li><a href="#solicitar-informacion" onClick={cerrar}>Solicitar información</a></li>
              <li><a href="#transparencia" onClick={cerrar}>Transparencia Activa</a></li>
              <li><a href="#ley-lobby" onClick={cerrar}>Plataforma Ley Lobby</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="barraAbajo">
        <div className="contenedorMenu">
          <ul className="linksAbajo">
            <li><a href="#solicitar-informacion">Solicitar información</a></li>
            <li><a href="#transparencia">Transparencia Activa</a></li>
            <li><a href="#ley-lobby">Plataforma Ley Lobby</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Menu

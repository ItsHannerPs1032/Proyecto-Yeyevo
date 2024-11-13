
import React from 'react'

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>YEYEVO</h1>
        <nav>
          <ul className='lista'> 
            <li>
              <a className="ingresar">Ingresar</a>
            </li>
            <li>
              <a className="carrito">Carrito</a>
            </li>
            <li>
              <a className="acercade">Acerca de</a>
            </li>
            <li>
              <a className="contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;

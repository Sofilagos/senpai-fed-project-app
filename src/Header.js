import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (

      <header>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <a href="prueba header.html"><img src="imagenes/rasymo logo.png" className="img-fluid" alt="rasymo"></img>
              </a></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <ul className="list-group list-group-horizontal-sm">
                <li className="list-group-item menu"><a className="categorias" href="prueba header.html">Inicio</a></li>
                <li className="list-group-item menu"><a className="categorias" href="prueba tienda.html">Tienda</a></li>
                <li className="list-group-item menu"><a className="categorias" href="prueba tienda.html">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header >

    );
  }
}
export default Header;


import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (

      <header>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-auto">
              <a href="prueba header.html"><img src="imagenes/rasymo logo.png" class="img-fluid" alt="rasymo"></img>
              </a> </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-auto">
              <ul class="list-group list-group-horizontal-sm">
                <li class="list-group-item"><a href="prueba header.html">Inicio</a></li>
                <li class="list-group-item"><a href="prueba tienda.html">Tienda</a></li>
                <li class="list-group-item">Contacto</li>
              </ul>
            </div>
          </div>
        </div>
      </header >

    );
  }
}
export default Header;


import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (

      <header className="general">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <a href="#" onClick={this.props.goToInicio}><img src="imagenes/rasymo logo.png" className="img-fluid" alt="rasymo"></img>
              </a></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <ul className="list-group list-group-horizontal-sm">
                <li className="list-group-item menu"><a className="categorias" href="#" onClick={this.props.goToInicio}>Inicio</a></li>
                <li className="list-group-item menu"><a className="categorias" href="#" onClick={this.props.goToTienda}>Tienda</a></li>
                <li className="list-group-item menu"><a className="categorias" href="#" onClick={this.props.goToContacto}>Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header >

    );
  }
}
export default Header;


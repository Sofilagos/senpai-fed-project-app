import React from 'react';
import './App.css';
import './Tienda.css';

class Tienda extends React.Component {
  render() {
    return (

      <tienda>
        <div className="container">
          <div className="row tienda">
            <div className="col-lg-12 col-sm-12">
              <div className="img-thumbnail">
                <h3>LO NUEVO</h3>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <img src="imagenes/banner 2.jpg" alt="fotolibro" className="img-thumbnail"></img>
            </div>
            <div className="col-lg-12 col-sm-12">
              <img src="imagenes/banner 3.jpg" alt="fotolibro" className="img-thumbnail"></img>
            </div>

            <div className="col-lg-12 col-sm-12">
              <div className="img-thumbnail">
                <h3>CLÁSICOS</h3>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src="imagenes/fotolibro.jpg" alt="fotolibro" className="img-thumbnail"></img>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="img-thumbnail detalle">
                <h4>Fotolibro artesanal</h4><br></br>
                <p>Formato 21x21 <br></br>
                  20 páginas <br></br>
                  Encuadernación térmica<br></br>
                  Caja contenedora</p>
                <br> </br>
                <p className="descripcion"> Nuestro fotolibro artesanal de 21x21 cm cuenta con 20 páginas donde
                    entran aprox. 70/80 fotos. Tapa rígida de cuerina, incluye caja contenedora. <br></br>

                  Las fotos se deben mandar por mail para poder armar el diseño, luego se envía un borrador
              para garantizar que el diseno esté ok. </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src="imagenes/libretas.jpg" alt="fotolibro" className="img-thumbnail"></img>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="img-thumbnail detalle">
                <h4>Libretitas cosidas</h4><br></br>
                <p>Formato 21x21 <br></br>
                  20 páginas <br></br>
                  Tapa rígida de cuerina<br></br>
                  Incluye caja contenedora</p>
                <br></br>
                <p className="descripcion"> Nuestro fotolibro artesanal de 21x21 cm cuenta con 20 páginas donde
              entran aprox. 70/80 fotos. Tapa rígida de cuerina, incluye caja contenedora. <br></br>  Las fotos se deben mandar por mail para poder armar el diseño, luego se envía un borrador para garantizar que el diseno esté ok.
                        </p>
              </div >
            </div >
            <div className="col-lg-6 col-sm-12">
              <img src="imagenes/album bebe.jpg" alt="fotolibro" className="img-thumbnail"></img>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="img-thumbnail detalle">
                <h4>Álbum para el bebé</h4><br></br>
                <p>Formato 21x21 <br></br>
                  20 páginas <br></br>
                  Tapa rígida de cuerina<br></br>
                  Incluye caja contenedora</p>
                <br> </br>
                <p className="descripcion"> Nuestro fotolibro artesanal de 21x21 cm cuenta con 20 páginas donde entran aprox. 70/80 fotos. Tapa rígida de cuerina, incluye caja contenedora. <br></br>

                  Las fotos se deben mandar por mail para poder armar el diseño, luego se envía un borrador
            para garantizar  que el diseno esté ok.</p>
              </div>
            </div>
          </div >
        </div >
      </tienda>
    );
  }
}

export default Tienda;

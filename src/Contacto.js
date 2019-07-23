import React from 'react';
import './Contacto.css';

class Contacto extends React.Component {
    render() {
        return (

            <contacto className="general">
                <div className="container">
                    <div className="row tienda">

                        <div className="col-lg-12 col-sm-12">
                            <img src="imagenes/mapa.jpg" alt="mapa" className="img-thumbnail"></img>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                            <div>
                                <div className="col-lg-12 col-sm-12"><b>Dirección</b></div>
                                Rivera 1373 <br></br>
                            </div>
                            <div><br></br>
                                <div className="col-lg-12 col-sm-12"><b>Contacto</b></div>
                                info@rasymo.com.uy<br></br>
                                (+598) 2890 5555<br></br>
                                Rivera 1373 <br></br>
                            </div>
                            <div className="col-lg-12 col-sm-12"><br></br><p><b> Nuestras redes:</b></p>
                                <a className="iconos" href="https://www.behance.net/sofilagos52e1/"> <img src="imagenes/logo be.png" className="img-fluid"
                                    alt="rasymo"></img></a>
                                <a className="iconos" href="https://www.facebook.com/rasymo1"><img src="imagenes/logo fb.png" className="img-fluid"
                                    alt="rasymo"></img></a>
                                <a className="iconos" href="https://instagram.com/rasymo_encuadernaciones?igshid=jg0fwkl165f2"><img
                                    src="imagenes/logo insta.png" className="img-fluid" alt="rasymo"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </contacto>

        );
    }
}
export default Contacto;


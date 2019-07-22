import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (

            <footer>
                <div className="container-fluid footer">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-sm-12">
                            <p>If you want to collaborate on crafting amazing experience people you are very welcome to contact me.</p>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-12"> Contacto:
                            <br></br> info@rasymo.com.uy
                            <br></br> (+598) 2890 5555
                            <br></br>Rivera 1373
                        </div><br></br>
                        <div className="col-lg-4 col-md-8 col-sm-12"><br></br><p> Encontranos en:</p>
                            <a href="https://www.behance.net/sofilagos52e1/"> <img src="imagenes/logo be.png" className="img-fluid"
                                alt="rasymo"></img></a>
                            <a href="https://www.facebook.com/rasymo1"><img src="imagenes/logo fb.png" className="img-fluid"
                                alt="rasymo"></img></a>
                            <a href="https://instagram.com/rasymo_encuadernaciones?igshid=jg0fwkl165f2"><img
                                src="imagenes/logo insta.png" className="img-fluid" alt="rasymo"></img></a>
                        </div>
                    </div>
                </div>
            </footer >

        );
    }
}
export default Footer;


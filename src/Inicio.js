import React from 'react';
import './Inicio.css';

class Inicio extends React.Component {
    render() {
        return (

            <inicio className="general">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="imagenes/banner.jpg" className="d-block w-100" alt="banner"></img>
                            </div>
                            <div className="carousel-item">
                                <a href="prueba tienda.html"> <img src="imagenes/banner 2.jpg" className="d-block w-100" alt="banner 2"></img></a>
                            </div>
                            <div className="carousel-item">
                                <img src="imagenes/banner 3.jpg" className="d-block w-100" alt="banner 3"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="container centrado">
                    <h2>Nuestra historia</h2>
                    <p>From thoughtfully designed studios, to duplex Maisonettes, to Penthouses with private
                        outdoor space, 88 and 90 Lex offers residences that pair seamlessly with any lifestyles. Stunning views complete the offering,
                        allowing tremendous light and air, enhanced by expansive vistas of the Chrysler Building, Empire State
                        Building, and the New York Life Building. <br></br><br></br>

                        The deluxe amenity suite at 88 and 90 Lex includes a rooftop terrace, state-of-the-art fitness center,
                        sunlit atrium swimming pool, sauna and steam room, children’s playroom, screening room, game room and
                        lounge, and 24-hour concierge.<br></br>
                        <br></br>
                        The bustling NoMad neighborhood surrounding 88 and 90 Lex is one of New York City’s most desirable
                        residential enclaves, a sophisticated district where beloved local institutions join an ever-expanding
                        roster of the city’s premier restaurants, shops, fitness centers, cafés, and hotels. Situated moments
                        from Madison Square Park, 88 and 90 Lex offers a convenient and accessible location that puts the best of
                        the city at your fingertips.<br></br><br></br>

                        Visit 88 and 90 Lex’s sales gallery and new model residences. Immediate Occupancy Available. Each
                        thoughtfully designed residence exhibits uncompromising attention to detail, with open kitchens and
                        living spaces, spacious bedrooms with large windows, and serene stone bathrooms with heated floor</p>
                </div>
            </inicio>

        );
    }
}
export default Inicio;


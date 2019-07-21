import React from 'react';
import './Inicio.css';

class Inicio extends React.Component {
    render() {
        return (

            <inicio>
                <div class="container">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagenes/banner.jpg" class="d-block w-100" alt="banner"></img>
                            </div>
                            <div class="carousel-item">
                                <a href="prueba tienda.html"> <img src="imagenes/banner 2.jpg" class="d-block w-100" alt="banner 2"></img></a>
                            </div>
                            <div class="carousel-item">
                                <img src="imagenes/banner 3.jpg" class="d-block w-100" alt="banner 3"></img>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div class="container centrado">
                    <h2>Nuestra historia</h2>
                    <p>From thoughtfully designed studios, to duplex Maisonettes, to Penthouses with private
                        outdoor space, 88 and 90 Lex offers residences that pair seamlessly with any lifestyles. Stunning views complete the offering,
                        allowing tremendous light and air, enhanced by expansive vistas of the Chrysler Building, Empire State
                        Building, and the New York Life Building. <br></br>

                        The deluxe amenity suite at 88 and 90 Lex includes a rooftop terrace, state-of-the-art fitness center,
                        sunlit atrium swimming pool, sauna and steam room, children’s playroom, screening room, game room and
                        lounge, and 24-hour concierge.<br></br>


                        The bustling NoMad neighborhood surrounding 88 and 90 Lex is one of New York City’s most desirable
                        residential enclaves, a sophisticated district where beloved local institutions join an ever-expanding
                        roster of the city’s premier restaurants, shops, fitness centers, cafés, and hotels. Situated moments
                        from Madison Square Park, 88 and 90 Lex offers a convenient and accessible location that puts the best of
                        the city at your fingertips.<br></br>

                        Visit 88 and 90 Lex’s sales gallery and new model residences. Immediate Occupancy Available. Each
                        thoughtfully designed residence exhibits uncompromising attention to detail, with open kitchens and
                        living spaces, spacious bedrooms with large windows, and serene stone bathrooms with heated floor</p>
                </div>
            </inicio>

        );
    }
}
export default Inicio;


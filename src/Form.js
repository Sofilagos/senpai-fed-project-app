import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (


            <form className="general">
                <div className="img-thumbnail form">
                    <div>
                        <h3>¡Pedir cotización!</h3>
                    </div>
                    <br />

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="text"><b>Nombre</b></label>
                            <input type="text" className="form-control" id="nombre" placeholder="Juan"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="text"><b>Apellido</b></label>
                            <input type="text" className="form-control" id="Apellido" placeholder="Pérez"></input>
                        </div>

                        <div className="form-group col-md-3">
                            <label for="text"><b>Teléfono</b></label>
                            <input type="text" className="form-control" id="Nombre" placeholder="099 111 111"></input>
                        </div>

                        <div className="form-group col-md-9">
                            <label for="Email"><b>Email</b></label>
                            <input type="email" className="form-control" id="email" placeholder="juan@ejemplo.com"></input>
                        </div>

                        <div className="form-group col-md-12">
                            <label for="text"><b>Producto de interés</b></label>
                            <select className="form-control" id="Dpto">
                                <option selected>Elegir</option>
                                <option>Fotolibro</option>
                                <option>Libreta</option>
                                <option>Álbum para el bebé</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"><b>Especificaciones</b></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div><br></br>
                    <button type="submit" className="btn btn-primary 2" onClick={this.props.goToEnd}>Enviar</button>
                </div>

            </form >

        );
    }
}
export default Form;


import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Inicio from './Inicio.js';
import Tienda from './Tienda.js';
import Contacto from './Contacto.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: 1,
    };
  }

  goToInicio = () =>
    this.setState({
      section: 1

    });

  goToTienda = () => {
    this.setState({
      section: 2
    });
  }

  goToContacto = () => {
    this.setState({
      section: 3
    });
  }

  renderCurrentSection() {
    switch (this.state.section) {
      case 3:
        return (
          <Contacto />
        );
      case 2:
        return (
          <Tienda />
        )
      case 1:
      default:
        return <Inicio />;
    }
  }

  render() {
    return (
      <div>
        <Header
          goToInicio={this.goToInicio}
          goToTienda={this.goToTienda}
          goToContacto={this.goToContacto}
        />
        <main>
          {this.renderCurrentSection()}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

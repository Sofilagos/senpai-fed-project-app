import React from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form';
import Footer from './Footer.js';
import Inicio from './Inicio.js';
import Tienda from './Tienda.js';
import Contacto from './Contacto.js';
import End from './End.js';

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

  goToForm = () => {
    this.setState({
      section: 4
    });
  }
  goToEnd = () => {
    this.setState({
      section: 5
    });
  }

  renderCurrentSection() {
    switch (this.state.section) {
      case 5:
        return (
          <End />
        );
      case 4:
        return (
          <Form
            goToEnd={this.goToEnd}
          />
        );
      case 3:
        return (
          <Contacto />
        );
      case 2:
        return (
          <Tienda
            goToForm={this.goToForm}
          />
        );
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

        <main className="general">
          {this.renderCurrentSection()}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;

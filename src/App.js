import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';


render() {
  return (
    <div>
      <Header
        goToHomeSection={this.goToHomeSection}
        goToAnimal={this.goToAnimal}
        goToNewAnimal={this.goToNewAnimal}
      />
      <main>
        {this.renderCurrentSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from 'react';

// components
import Header from './components/headerComponent/header.js';
import Footer from './components/footerComponent/footer.js';
// includes
import './Assets/CSS/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

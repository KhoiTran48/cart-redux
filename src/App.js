import React, { Component } from 'react';
import './App.css';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  
  render() {
    return (
        <div>
          <Header/>
          <main id="mainContainer">
            <div class="container">
              <ProductContainer/>
              <CartContainer/>
            </div>
        </main>
          <Footer/>
        </div>

    );
  }
}

export default App;

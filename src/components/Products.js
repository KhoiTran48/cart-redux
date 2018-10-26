import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Message from './Message';
class Products extends Component {
  
  render() {
    return (
      <div>
        <section class="section">
          <h1 class="section-heading">Danh Sách Sản Phẩm</h1>
          <div class="row">
              <ProductItem/>
              <ProductItem/>
              
          </div>
          
        </section>
        <Message/>
      </div>
    );
  }
}

export default Products;

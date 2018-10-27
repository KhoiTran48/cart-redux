import React, { Component } from 'react';
class Products extends Component {
  
  render() {
    return (
      <div>
        <section class="section">
          <h1 class="section-heading">Danh Sách Sản Phẩm</h1>
          <div class="row">
              {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default Products;

import React, { Component } from 'react';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';

import {connect} from 'react-redux';
import * as actions from './../actions/index';
class ProductContainer extends Component {
  
  render() {
    var {products}=this.props;
    return (
          <Products>
            {this.showProductItem(products)}
          </Products>
    );
  }
  showProductItem=(products)=>{
    var result=null;
    var {onAddCart, onUpdateMess}=this.props;
    result=products.map((item, index)=>{
      return <ProductItem
              proItem={item}
              key={index}
              onAddCart={onAddCart}
              onUpdateMess={onUpdateMess}
              >

            </ProductItem>
    })
    return result;
  }
}

const mapstateToProps=(state)=>{
  // console.log('mapState');
  return {
    products: state.products
  }
}
const mapDispatchToProps=(dispatch, props)=>{
    return {
      onAddCart:(pro,quan)=>{
        dispatch(actions.ADD_CART(pro,quan))
      },
      onUpdateMess:(mess)=>{
        dispatch(actions.UPDATE_MESS(mess))
      }
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(ProductContainer);

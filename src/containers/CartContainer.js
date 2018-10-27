import React, { Component } from 'react';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import Message from './../components/Message'

import {UPDATE_CART, DELETE_CART, UPDATE_MESS} from './../actions/index';
import { connect } from 'react-redux';
class CartContainer extends Component {
  
  render() {
    var { carts }=this.props;
    return (
        <Cart>
          {this.showCartItem(carts)}
          {this.showCartResult(carts)}
        </Cart>
    );
  }
  showCartResult=(carts)=>{
    if(carts.length ==0){
      var message="Chưa có sản phẩm nào trong giỏ hàng.";
      return ( 
          <Message message={message}/>
      )
    }
    var result=0;
      for(var item of carts){
        result+=item.product.price * item.quantity;
      }
    return <CartResult totalAmount={result} />;
  }
  showCartItem=(carts)=>{
    
    var result=[];
    var {onUpdateCart, onDeleteCart, onChangeMess}=this.props;
    if(carts.length ==0){
      return result;
    }
    result=carts.map((item,index)=>{
      return <CartItem
                key={index}
                cart={item}
                onUpdateCart={onUpdateCart}
                onDeleteCart={onDeleteCart}
                onChangeMess={onChangeMess}
              ></CartItem>
    })
    return result;
  }
}

const mapStateToProps=(state)=>{
  return {
    carts:state.carts
  }
}

const mapDispatchToProps=(dispatch, props)=>{
  return {
    onUpdateCart: (pro, quan)=>{
      dispatch(UPDATE_CART(pro,quan))
    },
    onDeleteCart:(pro)=>{
      dispatch(DELETE_CART(pro))
    },
    onChangeMess:(mess)=>{
      dispatch(UPDATE_MESS(mess))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

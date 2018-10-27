import React, { Component } from 'react';
import {UPDATE_CART, DELETE_CART} from './../constants/Messages';
class CartItem extends Component {
  
    onUpdateCart=(product, quantity)=>{
        this.props.onUpdateCart(product, quantity);
        this.props.onChangeMess(UPDATE_CART);
    }
    onDeleteCart=(product)=>{
        this.props.onDeleteCart(product);
        this.props.onChangeMess(DELETE_CART);
    }
  render() {
      var {cart}=this.props;
    return (
      <tr>
        <th scope="row">
            <img src={cart.product.image}
                alt="" class="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{cart.product.name}</strong>
            </h5>
        </td>
        <td>{cart.product.price}$</td>
        <td class="center-on-small-only">
            <span class="qty">{cart.quantity} </span>
            <div class="btn-group radio-group" data-toggle="buttons">
                <label class="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={()=>this.onUpdateCart(cart.product,-1)}>
                    <a>—</a>
                </label>
                <label class="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={()=>this.onUpdateCart(cart.product,1)}>
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{cart.product.price*cart.quantity}$</td>
        <td>
            <button type="button" class="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item"
                onClick={()=>this.onDeleteCart(cart.product)}>
                X
            </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;

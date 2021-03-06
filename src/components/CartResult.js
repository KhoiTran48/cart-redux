import React, { Component } from 'react';

class CartResult extends Component {
  
  render() {
      var {totalAmount}=this.props
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
            <h4>
                <strong>Tổng Tiền</strong>
            </h4>
        </td>
        <td>
            <h4>
                <strong>{totalAmount}$</strong>
            </h4>
        </td>
        <td colSpan="3">
            <button type="button" class="btn btn-primary waves-effect waves-light">Complete purchase
                <i class="fa fa-angle-right right"></i>
            </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;

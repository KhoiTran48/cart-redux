import React, { Component } from 'react';
import {ADD_CART} from './../constants/Messages';

class ProductItem extends Component {
    showRating=(rating)=>{
        var result=[];
          for(var i=0;i<rating;i++){
              result.push(<li key={i}>
                          <i class="fa fa-star"></i>
                        </li>);
          }
          for(var j=0;j<5-rating;j++){
              result.push(<li key={5-j}>
                          <i class="fa fa-star-o"></i>
                        </li>);
          }
      return result;
    }
    onAddCart=(proItem, quan)=>{
        this.props.onAddCart(proItem, quan);
        this.props.onUpdateMess(ADD_CART);
    }
  render() {
    var {proItem}=this.props; 
    return (
      <div class="col-lg-4 col-md-6 mb-r">
                <div class="card text-center card-cascade narrower">
                    <div class="view overlay hm-white-slight z-depth-1">
                        <img src={proItem.image}
                            class="img-fluid" alt="" />
                        <a>
                            <div class="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">
                            <strong>
                                <a>{proItem.name}</a>
                            </strong>
                        </h4>
                        <ul class="rating">
                            {this.showRating(proItem.rating)}
                        </ul>
                        <p class="card-text">
                            {proItem.description}
                        </p>
                        <div class="card-footer">
                            <span class="left">{proItem.price}$</span>
                            <span class="right">
                                <a class="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart"
                                onClick={()=>this.onAddCart(proItem,1)}>
                                    <i class="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default ProductItem;

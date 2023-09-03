/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    console.log(cart);

    let totalPrice = 0;
    let toatalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity == 0){
        //     product.quantity =1
        // }
        totalPrice = totalPrice + product.price * product.quantity;
        toatalShipping = toatalShipping + product.shipping
        quantity = quantity + product.quantity;
    }
    const tex = totalPrice*7/100;
    const GrandTotal = totalPrice+toatalShipping+tex
    return (
        <div className='cart'>
            <h2>cart container</h2>
                 <h4>Selected Items: {quantity}</h4>
                 <h5>Tottal Price: {totalPrice}</h5>
                 <h5>Shipping:{toatalShipping} </h5>
                 <h5>Tax:{tex.toFixed(2)} </h5>
                 <h5>GrandTotal:{GrandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;